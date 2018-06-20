import {
  IPC_METABIN_GATE_SEND
} from '~data/ipcTypes'

import { rendererCalls } from '~utils/ipcRenderer'

import getMetabinDataChannel from '~utils/getMetabinDataChannel'

const schemaName = 'albumSchema'

const getAlbumsGateApi = async () => {
  const publishAlbumByCid = cid => {
    return rendererCalls(IPC_METABIN_GATE_SEND, schemaName, cid)
  }
  const getIncomingAlbumsSource = () => {
    return getMetabinDataChannel(schemaName)
  }
  return {
    publishAlbumByCid,
    getIncomingAlbumsSource
  }
}

export default getAlbumsGateApi
