import { call, put, take } from 'redux-saga/effects';
import actions from '#actions';

function* startCachedIPFSFilesReciever(api) {
  const { getCachedIPFSFilesChannel, openCachedIPFSFilesStream } = api;
  yield call(openCachedIPFSFilesStream);
  const channel = yield call(getCachedIPFSFilesChannel);
  while (true) {
    const { errorMessage, payload } = yield take(channel);
    if (!errorMessage) {
      yield put(actions.systemIPFSFileCached(payload));
    } else {
      console.error(new Error(errorMessage));
    }
  }
}

export default startCachedIPFSFilesReciever;
