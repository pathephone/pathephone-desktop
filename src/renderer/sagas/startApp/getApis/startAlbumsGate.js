import { albumInstanceSchema } from '~data/schemas'
import {
  IPC_METABIN_GATE_START,
  IPC_METABIN_GATE_SEND
} from '~data/ipcTypes'

import { rendererCalls } from '~utils/ipcRenderer'

import getMetabinDataChannel from '~utils/getMetabinDataChannel'

const startAlbumsGate = async ipfsApis => {
  const gateId = await rendererCalls(IPC_METABIN_GATE_START, albumInstanceSchema)

  const publishAlbumByCid = cid => {
    return rendererCalls(IPC_METABIN_GATE_SEND, gateId, cid)
  }
  const getIncomingAlbumsSource = () => {
    return getMetabinDataChannel(gateId)
  }
  return {
    publishAlbumByCid,
    getIncomingAlbumsSource
  }
}

export default startAlbumsGate
