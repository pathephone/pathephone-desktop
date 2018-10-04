import { call, put } from 'redux-saga/effects';

import actions from '#actions';

import { IS_TESTING, IS_OFFLINE } from '~shared/config';

import startServices from './startApp/startServices';
import checkLegalAgreement from './startApp/checkLegalAgreement';
import {
  customIpfsApi, albumsCollectionApi, mainProcessApi, albumsGateApi,
} from '~renderer/api/intex';

const apis = {
  ...customIpfsApi,
  ...albumsCollectionApi,
  ...albumsGateApi,
  ...mainProcessApi,
};

function* startApp() {
  try {
    // pre services
    if (!IS_TESTING) {
      yield call(checkLegalAgreement);
    }
    const ipfsInfo = yield call(customIpfsApi.getIpfsInfo);
    yield put(actions.systemIpfsInfoRecieved({
      ...ipfsInfo,
      isOffline: IS_OFFLINE,
    }));
    yield call(albumsCollectionApi.startDb);

    // services
    yield call(startServices, apis);
    yield put(actions.systemAppStartSucceed());
  } catch (e) {
    console.error(e);
    yield put(actions.systemAppStartFailed(e.message));
  }
}

export default startApp;
