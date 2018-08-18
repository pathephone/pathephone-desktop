import { take, select, put } from 'redux-saga/effects';

import actions from '#actions';
import { shouldPlaylistBeRepeated } from '#selectors';

function* startPlaybackService() {
  while (true) {
    yield take(actions.systemAudioEnded);
    const isRepeat = yield select(shouldPlaylistBeRepeated);
    if (isRepeat) {
      yield put(actions.systemRepeatedPlaylistEnded());
    }
  }
}

export default startPlaybackService;
