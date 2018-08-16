import { call, put } from 'redux-saga/effects';

import getCustomIpfsApi from './getApis/getCustomIpfsApi';
import getStorageApi from './getApis/getStorageApi';
import getAlbumsGateApi from './getApis/getAlbumsGateApi';

import { systemAppStartProceed } from '~actions/system';
import getRestRemoteApis from './getApis/getRestRemoteApis';

function* getApis() {
  yield put(systemAppStartProceed(11));
  const [storageApi, ipfsApi] = yield [
    call(getStorageApi), call(getCustomIpfsApi),
  ];
  yield put(systemAppStartProceed(33));
  const [albumsGateApi] = yield [
    call(getAlbumsGateApi, ipfsApi),
  ];
  yield put(systemAppStartProceed(44));

  const restRemoteApis = getRestRemoteApis();

  yield put(systemAppStartProceed(55));

  return {
    ...storageApi,
    ...albumsGateApi,
    ...ipfsApi,
    ...restRemoteApis,
  };
}

export default getApis;
