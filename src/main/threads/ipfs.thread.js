import createThreadReducer from '~utils/createThreadReducer'

import {
  IPC_IPFS_START,
  IPC_IPFS_CACHE_CIDS,
  IPC_IPFS_SHARE_FS_FILE,
  IPC_IPFS_SHARE_OBJECT,
  IPC_METABIN_GATE_SUBSCRIBE,
  IPC_METABIN_GATE_SEND,
  IPC_METABIN_GATE_UNSUBSCRIBE,
  IPC_IPFS_GET_INFO,
  IPC_METABIN_GET_RECIEVED_DATA_CACHE
} from '~data/ipcTypes'

import startIpfsDaemon from './ipfs.thread/startIpfsDaemon'

import {
  getIpfsInfo,
  ipfsShareFsFile,
  ipfsShareObject,
  ipfsCacheFilesByCIDs
} from './ipfs.thread/ipfsApi'

import {
  metabinSubscribe,
  metabinSend,
  metabinUnsubscribe,
  metabinGetRecievedDataCache
} from './ipfs.thread/metabinApi'

let ipfsDaemonPromise

const reducer = ({ type, payload }) => {
  const args = { ipfsDaemonPromise, payload }
  switch (type) {
    case IPC_IPFS_START:
      ipfsDaemonPromise = startIpfsDaemon(payload)
      return
    case IPC_IPFS_GET_INFO:
      return getIpfsInfo(args)
    case IPC_IPFS_CACHE_CIDS:
      return ipfsCacheFilesByCIDs(args)
    case IPC_IPFS_SHARE_FS_FILE:
      return ipfsShareFsFile(args)
    case IPC_IPFS_SHARE_OBJECT:
      return ipfsShareObject(args)
    case IPC_METABIN_GATE_SUBSCRIBE:
      return metabinSubscribe(args)
    case IPC_METABIN_GATE_SEND:
      return metabinSend(args)
    case IPC_METABIN_GATE_UNSUBSCRIBE:
      return metabinUnsubscribe(args)
    case IPC_METABIN_GET_RECIEVED_DATA_CACHE:
      return metabinGetRecievedDataCache(args)
    default:
      throw new Error('ipfs.thread: Unknown message type.')
  }
}

createThreadReducer(reducer)

process.on('disconnect', async () => {
  try {
    const daemon = await ipfsDaemonPromise
    daemon.stop()
  } catch (e) {
    console.error(e)
  }
})
