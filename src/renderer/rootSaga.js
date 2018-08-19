import { take, call } from 'redux-saga/effects';

import actions from '#actions';

import startApp from './sagas/startApp';

function* rootSaga() {
  yield take(actions.systemAppRootMounted);
  yield call(startApp);
}

export default rootSaga;
