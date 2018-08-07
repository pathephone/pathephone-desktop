import { call, put, take } from 'redux-saga/effects';
import { systemIPFSFileCached } from '~actions/system';

function* startCachedIPFSFilesReciever(api) {
  const { getCachedIPFSFilesChannel, openCachedIPFSFilesStream } = api;
  yield call(openCachedIPFSFilesStream);
  const channel = yield call(getCachedIPFSFilesChannel);
  while (true) {
    const { errorMessage, payload } = yield take(channel);
    if (!errorMessage) {
      yield put(systemIPFSFileCached(payload));
    } else {
      console.error(new Error(errorMessage));
    }
  }
}

export default startCachedIPFSFilesReciever;
