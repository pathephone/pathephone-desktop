import { call, put } from 'redux-saga/effects';

import {
  albumsCollectionApi, customIpfsApi
} from '~renderer/api/intex';
import { checkLegalAgreement } from '~renderer/sagas/startApp/checkLegalAgreement';
import { startServices } from '~renderer/sagas/startApp/startServices';
import { actions } from '~renderer/state/actions';
import { IIpfsInfo } from '~renderer/types/api';
import { IS_OFFLINE, IS_TESTING } from '~shared/config';

export function* startApp(): Generator {
  try {
    // pre services
    if (!IS_TESTING) {
      yield call(checkLegalAgreement);
    }
    const ipfsInfo: IIpfsInfo = yield call(customIpfsApi.getIpfsInfo);
    yield put(actions.systemIpfsInfoRecieved({
      ...ipfsInfo,
      isOffline: IS_OFFLINE
    }));
    yield call(albumsCollectionApi.startDb);

    // services
    yield call(startServices);
    yield put(actions.systemAppStartSucceed());
  } catch (e) {
    yield put(actions.systemAppStartFailed(e.message));
  }
}
