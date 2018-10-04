import { call, put, take } from 'redux-saga/effects';
import actions from '#actions';

function* startCachedIPFSFilesReciever(api) {
  const { getCachedIpfsFilesChannel, openCachedIpfsFilesStream } = api;
  yield call(openCachedIpfsFilesStream);
  const channel = yield call(getCachedIpfsFilesChannel);
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
