import { openGate } from '@metabin/gate'

import { ipcMainTake } from '~utils/ipcMain'

import {
  IPC_METABIN_GATE_SEND,
  IPC_METABIN_GATE_LISTEN,
  IPC_METABIN_GATE_UNLISTEN,
  IPC_METABIN_GATE_DATA_RECIEVED
} from '~data/ipcTypes'

import * as schemas from '~data/schemas'

const startMetabinApi = ({ ipfsDaemonPromise }) => {
  const gatesByName = new Map()
  const gatesUnlistenersByName = new Map()

  const getGate = async schemaName => {
    let gate = gatesByName.get(schemaName)
    if (!gate) {
      const { api } = await ipfsDaemonPromise
      const { instanceSchema } = schemas[schemaName]
      gate = await openGate(api, instanceSchema)
      gatesByName.set(schemaName, gate)
    }
    return gate
  }
  const handleSend = async (schemaName, payload) => {
    const gate = await getGate(schemaName)
    return gate.send(payload)
  }
  const handleListen = async (schemaName, event) => {
    const gate = await getGate(schemaName)
    const unlisten = gatesUnlistenersByName.get(schemaName)
    if (unlisten) {
      await unlisten()
    }
    const listener = (data, cid) => {
      event.sender.send(
        IPC_METABIN_GATE_DATA_RECIEVED, { schemaName, payload: { data, cid } }
      )
    }
    const gateUnlistener = await gate.listen(listener)
    gatesUnlistenersByName.set(schemaName, gateUnlistener)
  }

  const handleUnlisten = schemaName => {
    const unlisten = gatesUnlistenersByName.get(schemaName)
    gatesUnlistenersByName.delete(schemaName)
    return unlisten()
  }

  const ipcUnlisteners = [
    ipcMainTake(IPC_METABIN_GATE_SEND, handleSend),
    ipcMainTake(IPC_METABIN_GATE_LISTEN, handleListen),
    ipcMainTake(IPC_METABIN_GATE_UNLISTEN, handleUnlisten)
  ]
  return () => {
    const handleEach = unlisten => { unlisten() }
    const handleMap = schemaName => handleUnlisten(schemaName)
    ipcUnlisteners
      .forEach(handleEach)
    return Promise.all(
      [...gatesUnlistenersByName.keys()]
        .map(handleMap)
    )
  }
}

export default startMetabinApi
