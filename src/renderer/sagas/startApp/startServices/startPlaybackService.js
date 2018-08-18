import { take, select, put } from 'redux-saga/effects';

import actions from '#actions';
import selectors from '#selectors';

function* startPlaybackService() {
  while (true) {
    yield take(actions.systemAudioEnded);
    const isRepeat = yield select(selectors.shouldPlaylistBeRepeated);
    if (isRepeat) {
      yield put(actions.systemRepeatedPlaylistEnded());
    }
  }
}

export default startPlaybackService;
