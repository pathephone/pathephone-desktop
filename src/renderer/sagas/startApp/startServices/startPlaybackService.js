import { take, select, put } from 'redux-saga/effects'

import { systemAudioEnded, systemRepeatedPlaylistEnded } from '#actions-system'
import { shouldPlaylistBeRepeated } from '#selectors'

function * startPlaybackService (args) {
  while (true) {
    yield take(systemAudioEnded)
    const isRepeat = yield select(shouldPlaylistBeRepeated)
    if (isRepeat) {
      yield put(systemRepeatedPlaylistEnded())
    }
  }
}

export default startPlaybackService
