import {
  IPC_METABIN_GATE_SEND,
  IPC_METABIN_GATE_SUBSCRIBE,
  IPC_METABIN_GATE_UNSUBSCRIBE,
  IPC_METABIN_GET_RECIEVED_DATA_CACHE
} from '~data/ipcTypes'

import { rendererCalls } from '~utils/ipcRenderer'

const schemaName = 'albumSchema'

const getAlbumsGateApi = async () => {
  const publishAlbumByCid = cid => {
    return rendererCalls(IPC_METABIN_GATE_SEND, schemaName, cid)
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
  return {
    publishAlbumByCid,
    subscribeToAlbumsGate,
    unsubscribeFromAlbumsGate,
    getRecievedAlbumsCache
  }
}

export default getAlbumsGateApi
