import { mainTakes } from '~utils/ipcMain'

import { IPC_IPFS_SHARE_OBJECT, IPC_IPFS_SHARE_FS_FILE, IPC_IPFS_GET_FILES } from '~data/ipcTypes'

const dagParams = { format: 'dag-cbor', hashAlg: 'sha3-512' }

const startIpfsApi = ({ api }) => {
  const handleShareObject = async obj => {
    const cidObj = await api.dag.put(obj, dagParams)
    const cid = cidObj.toBaseEncodedString()
    return cid
  }
  const handleShareFsFile = async filePath => {
    const output = await api.util.addFromFs(filePath)
    const { hash } = output[0]
    return hash
  }
  const handleGetFiles = cid => {
    return api.files.get(cid)
  }
  const apiUnlisteners = [
    mainTakes(IPC_IPFS_SHARE_OBJECT, handleShareObject),
    mainTakes(IPC_IPFS_SHARE_FS_FILE, handleShareFsFile),
    mainTakes(IPC_IPFS_GET_FILES, handleGetFiles)
  ]
  return () => {
    apiUnlisteners.forEach(unlisten => { unlisten() })
  }
}

export default startIpfsApi
