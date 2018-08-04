import { openGate } from '@metabin/gate'

import validateAlbum from '~utils/validateAlbum'

import * as schemas from '~data/schemas'

const gatesByName = new Map()
const gatesUnlistenersByName = new Map()
const dataCacheByName = new Map()

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
  const listener = (data, cid) => {
    const { valid } = validateAlbum(data)
    if (valid) {
      const lastSeenAt = new Date().getTime()
      const dataCache = dataCacheByName.get(schemaName)
      dataCache.set(cid, { data, lastSeenAt })
    }
  }
  try {
    dataCacheByName.set(schemaName, new Map())
    const gateUnlistener = await gate.listen(listener)
    gatesUnlistenersByName.set(schemaName, gateUnlistener)
  } catch (e) {
    dataCacheByName.delete(schemaName)
    throw e
  }
}

export const metabinGetRecievedDataCache = ({ payload: schemaName }) => {
  const dataCache = dataCacheByName.get(schemaName)
  if (dataCache) {
    const dataCacheArray = [
      ...dataCache.entries()
    ]
    dataCache.clear()
    return dataCacheArray.map(
      ([cid, data]) => ({ cid, ...data })
    )
  } else {
    throw new Error(`No data cache for ${schemaName} found. Subscribe first.`)
  }
}

export const metabinUnsubscribe = ({ payload: schemaName }) => {
  const unlisten = gatesUnlistenersByName.get(schemaName)
  gatesUnlistenersByName.delete(schemaName)
  dataCacheByName.delete(schemaName)
  return unlisten()
}

export const getMetabinPeersCount = async () => {
  const gates = [...gatesByName.values()]
  const peersArray = await Promise.all(
    gates.map(gate => gate.getPeers())
  )
  return peersArray.reduce((acc, item) => {
    return acc + item.length
  }, 0)
}
