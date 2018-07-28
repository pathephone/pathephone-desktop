import { call, put } from 'redux-saga/effects'
import { eventChannel } from 'redux-saga'
import { ipcRenderer } from 'electron'

import { IS_OFFLINE } from '#config'

import {
  IPC_IPFS_SHARE_OBJECT,
  IPC_IPFS_SHARE_FS_FILE,
  IPC_IPFS_CACHE_CIDS,
  IPC_IPFS_GET_INFO,
  IPC_IPFS_CID_CACHE_FAILED,
  IPC_IPFS_CID_CACHE_SUCCEED,
  IPC_IPFS_OPEN_CACHED_CIDS_STREAM,
  IPC_IPFS_GET_STATS
} from '~data/ipcTypes'

import { rendererCalls } from '~utils/ipcRenderer'
import { systemIpfsInfoRecieved } from '~actions/system'

function * getCustomIpfsApi () {
  const ipfsInfo = yield call(rendererCalls, IPC_IPFS_GET_INFO)
  yield put(systemIpfsInfoRecieved({
    ...ipfsInfo,
    isOffline: IS_OFFLINE
  }))

  const shareObjectToIpfs = obj => {
    return rendererCalls(IPC_IPFS_SHARE_OBJECT, obj)
  }
  const shareFsFileToIpfs = filePath => {
    return rendererCalls(IPC_IPFS_SHARE_FS_FILE, filePath)
  }
  const cacheIPFSFilesByCIDs = cids => {
    return rendererCalls(IPC_IPFS_CACHE_CIDS, cids)
  }
  const openCachedCIDsStream = () => {
    return rendererCalls(IPC_IPFS_OPEN_CACHED_CIDS_STREAM)
  }
  const getCachedCIDsChannel = () => {
    return eventChannel(emit => {
      const handleMessage = (e, arg) => {
        emit(arg)
      }
      ipcRenderer.on(IPC_IPFS_CID_CACHE_SUCCEED, handleMessage)
      ipcRenderer.on(IPC_IPFS_CID_CACHE_FAILED, handleMessage)
      return () => {
        ipcRenderer.removeListener(IPC_IPFS_CID_CACHE_SUCCEED, handleMessage)
        ipcRenderer.removeListener(IPC_IPFS_CID_CACHE_FAILED, handleMessage)
      }
    })
  }
  const getIPFSStats = () => {
    return rendererCalls(IPC_IPFS_GET_STATS)
  }

  return {
    shareFsFileToIpfs,
    shareObjectToIpfs,
    cacheIPFSFilesByCIDs,
    openCachedCIDsStream,
    getCachedCIDsChannel,
    getIPFSStats
  }
}

export default getCustomIpfsApi
