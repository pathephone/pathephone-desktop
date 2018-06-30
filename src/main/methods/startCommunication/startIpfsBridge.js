import { ipcMainTake } from '~utils/ipcMain'

import {
  IPC_IPFS_SHARE_OBJECT,
  IPC_IPFS_SHARE_FS_FILE,
  IPC_IPFS_GET_FILES,
  IPC_IPFS_GET_INFO
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
  const handleGetFiles = async cid => {
    const ipfsProcess = await ipfsProcessPromise
    return ipfsProcess.call({ type: IPC_IPFS_GET_FILES, payload: cid })
  }
  const apiUnlisteners = [
    ipcMainTake(IPC_IPFS_GET_INFO, handleIpfsStartRequest),
    ipcMainTake(IPC_IPFS_SHARE_OBJECT, handleShareObject),
    ipcMainTake(IPC_IPFS_SHARE_FS_FILE, handleShareFsFile),
    ipcMainTake(IPC_IPFS_GET_FILES, handleGetFiles)
  ]
  return () => {
    apiUnlisteners.forEach(unlisten => { unlisten() })
  }
}

export default startIpfsBridge
