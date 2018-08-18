import { call, put } from 'redux-saga/effects';

import getCustomIpfsApi from './getApis/getCustomIpfsApi';
import getStorageApi from './getApis/getStorageApi';
import getAlbumsGateApi from './getApis/getAlbumsGateApi';

import actions from '#actions';
import getRestRemoteApis from './getApis/getRestRemoteApis';

function* getApis() {
  yield put(actions.systemAppStartProceed(11));
  const [storageApi, ipfsApi] = yield [
    call(getStorageApi), call(getCustomIpfsApi),
  ];
  yield put(actions.systemAppStartProceed(33));
  const [albumsGateApi] = yield [
    call(getAlbumsGateApi, ipfsApi),
  ];
  yield put(actions.systemAppStartProceed(44));

  const restRemoteApis = getRestRemoteApis();

  yield put(actions.systemAppStartProceed(55));

  return {
    ...storageApi,
    ...albumsGateApi,
    ...ipfsApi,
    ...restRemoteApis,
  };
}

export default getApis;
