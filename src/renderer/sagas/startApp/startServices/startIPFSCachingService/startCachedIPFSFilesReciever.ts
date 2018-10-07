import { Channel } from 'redux-saga';

import { call, put, take } from 'redux-saga/effects';
import { customIpfsApi } from '~renderer/api/intex';
import actions from '~renderer/state/actions';

export function* startCachedIPFSFilesReciever(): Generator {
  yield call(customIpfsApi.openCachedIpfsFilesStream);
  const channel: Channel<string> = yield call(customIpfsApi.getCachedIpfsFilesChannel);
  // tslint:disable-next-line no-constant-condition
  while (true) {
    const { errorMessage, payload } = yield take(channel);
    if (!errorMessage) {
      yield put(actions.systemIPFSFileCached(payload));
    } else {
      console.error(new Error(errorMessage));
    }
  }
}
