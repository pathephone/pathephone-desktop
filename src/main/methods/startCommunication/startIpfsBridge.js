import { ipcMainTake } from '~utils/ipcMain'

import {
  IPC_IPFS_SHARE_OBJECT,
  IPC_IPFS_SHARE_FS_FILE,
  IPC_IPFS_CACHE_CIDS,
  IPC_IPFS_GET_INFO,
  IPC_IPFS_CID_CACHE_SUCCEED,
  IPC_IPFS_CID_CACHE_FAILED,
  IPC_IPFS_OPEN_CACHED_CIDS_STREAM,
  IPC_IPFS_GET_STATS
} from '~data/ipcTypes'

const startIpfsBridge = ({ ipfsProcessPromise }) => {
  const handleIpfsStartRequest = async () => {
    const ipfsProcess = await ipfsProcessPromise
    const ipfsInfo = await ipfsProcess.call({ type: IPC_IPFS_GET_INFO })
    return ipfsInfo
  }
  const handleShareObject = async obj => {
    const ipfsProcess = await ipfsProcessPromise
    return ipfsProcess.call({ type: IPC_IPFS_SHARE_OBJECT, payload: obj })
  }
  const handleShareFsFile = async filePath => {
    const ipfsProcess = await ipfsProcessPromise
    return ipfsProcess.call({ type: IPC_IPFS_SHARE_FS_FILE, payload: filePath })
  }
  const handleCacheFilesByCIDs = async cids => {
    const ipfsProcess = await ipfsProcessPromise
    return ipfsProcess.call({ type: IPC_IPFS_CACHE_CIDS, payload: cids })
  }

  const handleOpenCachedCIDsStream = async event => {
    const ipfsProcess = await ipfsProcessPromise
    const handleMessage = ({ type, ...rest }) => {
      switch (type) {
        case IPC_IPFS_CID_CACHE_SUCCEED:
        case IPC_IPFS_CID_CACHE_FAILED:
          event.sender.send(type, rest)
      }
    }
    ipfsProcess.on('message', handleMessage)
    event.sender.on('destroyed', () => {
      ipfsProcess.removeListener('message', handleMessage)
    })
  }
  const handleGetStats = async () => {
    const ipfsProcess = await ipfsProcessPromise
    return ipfsProcess.call({ type: IPC_IPFS_GET_STATS })
  }

  const apiUnlisteners = [
    ipcMainTake(IPC_IPFS_GET_INFO, handleIpfsStartRequest),
    ipcMainTake(IPC_IPFS_SHARE_OBJECT, handleShareObject),
    ipcMainTake(IPC_IPFS_SHARE_FS_FILE, handleShareFsFile),
    ipcMainTake(IPC_IPFS_CACHE_CIDS, handleCacheFilesByCIDs),
    ipcMainTake(IPC_IPFS_OPEN_CACHED_CIDS_STREAM, handleOpenCachedCIDsStream),
    ipcMainTake(IPC_IPFS_GET_STATS, handleGetStats)
  ]
  return () => {
    apiUnlisteners.forEach(unlisten => { unlisten() })
  }
}

export default startIpfsBridge
