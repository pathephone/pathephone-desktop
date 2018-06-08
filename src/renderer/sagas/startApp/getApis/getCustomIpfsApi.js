import { call, put } from 'redux-saga/effects'

import {
  IPC_IPFS_SHARE_OBJECT,
  IPC_IPFS_SHARE_FS_FILE,
  IPC_IPFS_GET_FILES,
  IPC_IPFS_START
} from '~data/ipcTypes'

import { rendererCalls } from '~utils/ipcRenderer'
import { systemIpfsInfoRecieved } from '~actions/system'

function * getCustomIpfsApi () {
  const ipfsInfo = yield call(rendererCalls, IPC_IPFS_START)

  yield put(systemIpfsInfoRecieved(ipfsInfo))

  const shareObjectToIpfs = obj => {
    return rendererCalls(IPC_IPFS_SHARE_OBJECT, obj)
  }
  const shareFsFileToIpfs = filePath => {
    return rendererCalls(IPC_IPFS_SHARE_FS_FILE, filePath)
  }
  const getFilesFromIpfs = cid => {
    return rendererCalls(IPC_IPFS_GET_FILES, cid)
  }

  return { shareFsFileToIpfs, shareObjectToIpfs, getFilesFromIpfs }
}

export default getCustomIpfsApi
