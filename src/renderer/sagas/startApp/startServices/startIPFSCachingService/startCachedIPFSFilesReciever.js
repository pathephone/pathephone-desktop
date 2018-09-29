import { call, put, take } from 'redux-saga/effects';
import actions from '#actions';
import printRenderer from '~shared/utils/printRenderer';

function* startCachedIPFSFilesReciever(api) {
  const { getCachedIPFSFilesChannel, openCachedIPFSFilesStream } = api;
  yield call(openCachedIPFSFilesStream);
  const channel = yield call(getCachedIPFSFilesChannel);
  while (true) {
    const { errorMessage, payload } = yield take(channel);
    if (!errorMessage) {
      yield put(actions.systemIPFSFileCached(payload));
    } else {
      printRenderer.error(new Error(errorMessage));
    }
  }
}

export default startCachedIPFSFilesReciever;
