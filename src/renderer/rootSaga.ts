import { call, take } from 'redux-saga/effects';

import { startApp } from '~renderer/sagas/startApp';
import actions from '~renderer/state/actions';

export function* rootSaga(): Generator {
  yield take(actions.systemAppRootMounted);
  yield call(startApp);
}
