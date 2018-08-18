import { take, call } from 'redux-saga/effects';

import { rendererCalls, rendererCallsSaga } from '~shared/utils/ipcRenderer';

import ipc from '~shared/data/ipc';

function getRestRemoteApis() {
  function* getAlbumCandidatesFromFs(...args) {
    const chan = yield call(rendererCallsSaga, ipc.GET_ALBUM_CANDIDATES_FROM_FS_ITEMS, ...args);
    const { error, payload } = yield take(chan);
    if (error) {
      throw new Error(error);
    }
    return payload;
  }

  const getTracksFromFsFiles = (...args) => rendererCalls(ipc.GET_TRACKS_FROM_FS_FILES, ...args);

  return {
    getAlbumCandidatesFromFs,
    getTracksFromFsFiles,
  };
}

export default getRestRemoteApis;
