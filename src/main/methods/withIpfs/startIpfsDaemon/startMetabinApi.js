import { openGate } from '@metabin/gate'

import { mainTakes } from '~utils/ipcMain'
import {
  IPC_METABIN_GATE_START,
  IPC_METABIN_GATE_SEND,
  IPC_METABIN_GATE_LISTEN,
  IPC_METABIN_GATE_DATA_RECIEVED,
  IPC_METABIN_GATE_UNLISTEN
} from '~data/ipcTypes'
import { ipcMain } from 'electron'

const startMetabinApi = ({ api }, window) => {
  let inc = 0

  const gatesById = new Map()
  const gatesUnlistenersById = new Map()

  const handleStart = async schema => {
    const id = ++inc
    const gate = await openGate(api, schema)
    gatesById.set(id, gate)
    return id
  }
  const handleSend = (gateId, payload) => {
    const gate = gatesById.get(gateId)
    return gate.send(payload)
  }
  const handleListen = async gateId => {
    const id = ++inc
    const gate = gatesById.get(gateId)
    const listener = data => {
      window.webContents.send(
        IPC_METABIN_GATE_DATA_RECIEVED, { data, gateId }
      )
    }
    const gateUnlistener = await gate.listen(listener)
    gatesUnlistenersById.set(id, gateUnlistener)
    return id
  }
  const handleUnlisten = listenerId => {
    const unlisten = gatesUnlistenersById.get(listenerId)
    gatesUnlistenersById.delete(listenerId)
    unlisten()
  }
  const ipcUnlisteners = [
    mainTakes(IPC_METABIN_GATE_START, handleStart),
    mainTakes(IPC_METABIN_GATE_SEND, handleSend),
    mainTakes(IPC_METABIN_GATE_LISTEN, handleListen),
    mainTakes(IPC_METABIN_GATE_UNLISTEN, handleUnlisten)
  ]
  return () => {
    const handleEach = unlisten => {
      unlisten()
    }
    ipcUnlisteners
      .forEach(handleEach)
    gatesUnlistenersById
      .forEach(handleEach)
  }
}

export default startMetabinApi
