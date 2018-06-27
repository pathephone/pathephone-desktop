import { take, call } from 'redux-saga/effects'

import { rendererCalls, rendererCallsSaga } from '~utils/ipcRenderer'

import {
  IPC_GET_ALBUM_CANDIDATES_FROM_FS,
  IPC_GET_TRACKS_FROM_FS_FILES
} from '~data/ipcTypes'

function getRestRemoteApis () {
  function * getAlbumCandidatesFromFs (...args) {
    const chan = yield call(rendererCallsSaga, IPC_GET_ALBUM_CANDIDATES_FROM_FS, ...args)
    const { error, payload } = yield take(chan)
    if (error) {
      throw new Error(error)
    }
    return payload
  }

  const getTracksFromFsFiles = (...args) => {
    return rendererCalls(IPC_GET_TRACKS_FROM_FS_FILES, ...args)
  }

  return {
    getAlbumCandidatesFromFs,
    getTracksFromFsFiles
  }
}

export default getRestRemoteApis
