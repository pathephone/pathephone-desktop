import {
  all, call, put, spawn
} from 'redux-saga/effects';

import { startAlbumsReciever } from '~renderer/sagas/startApp/startServices/startAblumsReciever';
import { startAlbumsCollectionInfo } from '~renderer/sagas/startApp/startServices/startAlbumsCollectionInfo';
import { startAlbumsPublisher } from '~renderer/sagas/startApp/startServices/startAlbumsPublisher';
import { startAlbumsSharingService } from '~renderer/sagas/startApp/startServices/startAlbumsSharingService';
import { startDiscoverPageService } from '~renderer/sagas/startApp/startServices/startDiscoverPageService';
import { startIndicatorsBarService } from '~renderer/sagas/startApp/startServices/startIndicatorsBarService';
import { startIPFSCachingService } from '~renderer/sagas/startApp/startServices/startIPFSCachingService';
import { startNewReleaseChecker } from '~renderer/sagas/startApp/startServices/startNewReleaseChecker';
import { startNotificationsService } from '~renderer/sagas/startApp/startServices/startNotificationsService';
import { actions } from '~renderer/state/actions';
import asyncTimeout from '~shared/utils/asyncTimeout';

export function* startServices(): Generator {
  yield put(actions.systemAppStartProceed(66));
  yield all([
    spawn(startAlbumsReciever),
    spawn(startAlbumsPublisher),
    spawn(startAlbumsSharingService),
    spawn(startDiscoverPageService),
    spawn(startIPFSCachingService),
    spawn(startAlbumsCollectionInfo),
    spawn(startNotificationsService),
    spawn(startNewReleaseChecker),
    spawn(startIndicatorsBarService)
  ]);
  yield put(actions.systemAppStartProceed(100));
  yield call(asyncTimeout, 100);
}
