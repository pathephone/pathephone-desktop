import { openGate } from '@metabin/gate'

import * as schemas from '~data/schemas'
import { IPC_METABIN_GATE_DATA_RECIEVED } from '~data/ipcTypes'

const gatesByName = new Map()
const gatesUnlistenersByName = new Map()

const getGate = async (ipfsDaemonPromise, schemaName) => {
  let gate = gatesByName.get(schemaName)
  if (!gate) {
    const { api } = await ipfsDaemonPromise
    const { instanceSchema } = schemas[schemaName]
    gate = await openGate(api, instanceSchema)
    gatesByName.set(schemaName, gate)
  }
  return gate
}

export const metabinSend = async ({ ipfsDaemonPromise, payload: { schemaName, data } }) => {
  const gate = await getGate(ipfsDaemonPromise, schemaName)
  return gate.send(data)
}

export const metabinSubscribe = async ({ ipfsDaemonPromise, payload: schemaName }) => {
  const gate = await getGate(ipfsDaemonPromise, schemaName)
  const unlisten = gatesUnlistenersByName.get(schemaName)
  if (unlisten) {
    await unlisten()
  }
  const listener = (data, cid) => {
    process.send({
      type: IPC_METABIN_GATE_DATA_RECIEVED,
      payload: { data, cid, schemaName }
    })
  }
  const gateUnlistener = await gate.listen(listener)
  gatesUnlistenersByName.set(schemaName, gateUnlistener)
}

export const metabinUnsubscribe = ({ payload: schemaName }) => {
  const unlisten = gatesUnlistenersByName.get(schemaName)
  gatesUnlistenersByName.delete(schemaName)
  return unlisten()
}
