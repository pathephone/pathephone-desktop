import { call, put } from 'redux-saga/effects';

import actions from '#actions';

import { IS_TESTING } from '~shared/config';

import startServices from './startApp/startServices';
import getApis from './startApp/getApis';
import checkLegalAgreement from './startApp/checkLegalAgreement';

function* startApp() {
  try {
    if (!IS_TESTING) {
      yield call(checkLegalAgreement);
    }
    const apis = yield call(getApis);
    yield call(startServices, apis);
    yield put(actions.systemAppStartSucceed());
  } catch (e) {
    console.error(e);
    yield put(actions.systemAppStartFailed(e.message));
  }
}

export default startApp;
