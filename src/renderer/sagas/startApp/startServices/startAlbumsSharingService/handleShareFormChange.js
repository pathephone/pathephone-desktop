import { all, call, put } from 'redux-saga/effects'

import { systemShareFormChanged, systemUiLocked, systemUiUnlocked } from '#actions-system'

import getTracksFromFiles from '~utils/getTracksFromFiles'

function * handleMap (track) {
  if (track.artist === undefined && track.title === undefined) {
    const tracks = yield call(getTracksFromFiles, [ track.file ])
    return tracks[0]
  }
  return track
}

function * handleShareFormChange (args, { payload }) {
  yield put(systemUiLocked())
  try {
    const tracks = yield all(
      payload.tracks.map(handleMap)
    )
    const album = {
      ...payload,
      tracks
    }

    yield put(systemShareFormChanged(album))
  } catch (e) {
    console.error(e)
  }
  yield put(systemUiUnlocked())
}

export default handleShareFormChange
