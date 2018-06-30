import createThreadReducer from '~utils/createThreadReducer'

import {
  IPC_IPFS_START,
  IPC_IPFS_GET_FILES,
  IPC_IPFS_SHARE_FS_FILE,
  IPC_IPFS_SHARE_OBJECT,
  IPC_METABIN_GATE_SUBSCRIBE,
  IPC_METABIN_GATE_SEND,
  IPC_METABIN_GATE_UNLISTEN,
  IPC_IPFS_GET_INFO
} from '~data/ipcTypes'

import startIpfsDaemon from './ipfs.thread/startIpfsDaemon'

import {
  ipfsGetFile,
  getIpfsInfo,
  ipfsShareFsFile,
  ipfsShareObject
} from './ipfs.thread/ipfsApi'

import {
  metabinSubscribe,
  metabinSend,
  metabinUnsubscribe
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
    case IPC_IPFS_GET_FILES:
      return ipfsGetFile(args)
    case IPC_IPFS_SHARE_FS_FILE:
      return ipfsShareFsFile(args)
    case IPC_IPFS_SHARE_OBJECT:
      return ipfsShareObject(args)
    case IPC_METABIN_GATE_SUBSCRIBE:
      return metabinSubscribe(args)
    case IPC_METABIN_GATE_SEND:
      return metabinSend(args)
    case IPC_METABIN_GATE_UNLISTEN:
      return metabinUnsubscribe(args)
    default:
      throw new Error('ipfs.thread: Unknown message type.')
  }
}

createThreadReducer(reducer)

process.on('disconnect', async () => {
  const daemon = await ipfsDaemonPromise
  daemon.stop()
})
