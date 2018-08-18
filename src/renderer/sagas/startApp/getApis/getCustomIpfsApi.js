import { call, put } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { ipcRenderer } from 'electron';

import { IS_OFFLINE } from '~shared/config';

import ipc from '~shared/data/ipc';

import { rendererCalls } from '~shared/utils/ipcRenderer';
import { systemIpfsInfoRecieved } from '~actions/system';

function* getCustomIpfsApi() {
  const ipfsInfo = yield call(rendererCalls, ipc.IPFS_GET_INFO);
  yield put(systemIpfsInfoRecieved({
    ...ipfsInfo,
    isOffline: IS_OFFLINE,
  }));

  const shareObjectToIpfs = obj => rendererCalls(ipc.IPFS_SHARE_OBJECT, obj);
  const shareFsFileToIpfs = filePath => rendererCalls(ipc.IPFS_SHARE_FS_FILE, filePath);
  const cacheIPFSFilesByCIDs = cids => rendererCalls(ipc.IPFS_CACHE_CIDS, cids);
  const openCachedIPFSFilesStream = () => rendererCalls(ipc.IPFS_OPEN_CACHED_CIDS_STREAM);
  const getCachedIPFSFilesChannel = () => eventChannel((emit) => {
    const handleMessage = (e, arg) => {
      emit(arg);
    };
    ipcRenderer.on(ipc.IPFS_CID_CACHE_SUCCEED, handleMessage);
    ipcRenderer.on(ipc.IPFS_CID_CACHE_FAILED, handleMessage);
    return () => {
      ipcRenderer.removeListener(ipc.IPFS_CID_CACHE_SUCCEED, handleMessage);
      ipcRenderer.removeListener(ipc.IPFS_CID_CACHE_FAILED, handleMessage);
    };
  });
  const getIPFSStats = () => rendererCalls(ipc.IPFS_GET_STATS);

  return {
    shareFsFileToIpfs,
    shareObjectToIpfs,
    cacheIPFSFilesByCIDs,
    openCachedIPFSFilesStream,
    getCachedIPFSFilesChannel,
    getIPFSStats,
  };
}

export default getCustomIpfsApi;
