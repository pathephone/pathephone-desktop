import {
  IPC_METABIN_GATE_SEND_EACH,
  IPC_METABIN_GATE_SUBSCRIBE,
  IPC_METABIN_GATE_UNSUBSCRIBE,
  IPC_METABIN_GET_RECIEVED_DATA_CACHE,
  IPC_METABIN_GET_PEERS_COUNT
} from '~data/ipcTypes'

import { rendererCalls } from '~utils/ipcRenderer'

const schemaName = 'albumSchema'

const getAlbumsGateApi = async () => {
  const publishAlbumsByCIDs = cids => {
    return rendererCalls(IPC_METABIN_GATE_SEND_EACH, schemaName, cids)
  }
  const subscribeToAlbumsGate = () => {
    return rendererCalls(IPC_METABIN_GATE_SUBSCRIBE, schemaName)
  }
  const unsubscribeFromAlbumsGate = () => {
    return rendererCalls(IPC_METABIN_GATE_UNSUBSCRIBE, schemaName)
  }
  const getRecievedAlbumsCache = () => {
    return rendererCalls(IPC_METABIN_GET_RECIEVED_DATA_CACHE, schemaName)
  }
  const getMetabinPeersCount = () => {
    return rendererCalls(IPC_METABIN_GET_PEERS_COUNT, schemaName)
  }

  return {
    publishAlbumsByCIDs,
    subscribeToAlbumsGate,
    unsubscribeFromAlbumsGate,
    getRecievedAlbumsCache,
    getMetabinPeersCount
  }
}

export default getAlbumsGateApi
