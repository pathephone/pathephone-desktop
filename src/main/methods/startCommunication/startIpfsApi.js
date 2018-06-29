import { ipcMainTake } from '~utils/ipcMain'

import { IPC_IPFS_SHARE_OBJECT, IPC_IPFS_SHARE_FS_FILE, IPC_IPFS_GET_FILES } from '~data/ipcTypes'

const dagParams = { format: 'dag-cbor', hashAlg: 'sha3-512' }

const startIpfsApi = ({ ipfsDaemonPromise }) => {
  const handleShareObject = async obj => {
    const { api } = await ipfsDaemonPromise
    const cidObj = await api.dag.put(obj, dagParams)
    const cid = cidObj.toBaseEncodedString()
    return cid
  }
  const handleShareFsFile = async filePath => {
    const { api } = await ipfsDaemonPromise
    const output = await api.util.addFromFs(filePath)
    const { hash } = output[0]
    return hash
  }
  const handleGetFiles = async cid => {
    const { api } = await ipfsDaemonPromise
    return api.files.get(cid)
  }
  const apiUnlisteners = [
    ipcMainTake(IPC_IPFS_SHARE_OBJECT, handleShareObject),
    ipcMainTake(IPC_IPFS_SHARE_FS_FILE, handleShareFsFile),
    ipcMainTake(IPC_IPFS_GET_FILES, handleGetFiles)
  ]
  return () => {
    apiUnlisteners.forEach(unlisten => { unlisten() })
  }
}

export default startIpfsApi
