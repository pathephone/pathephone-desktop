import { fork } from 'redux-saga/effects';

import { startCachedIPFSFilesReciever } from '~renderer/sagas/startApp/startServices/startIPFSCachingService/startCachedIPFSFilesReciever';
import { startIPFSFilesCatch } from '~renderer/sagas/startApp/startServices/startIPFSCachingService/startIPFSFilesCatch';

export function* startIPFSCachingService(): Generator {
  try {
    yield fork(startCachedIPFSFilesReciever);
    yield fork(startIPFSFilesCatch);
  } catch (e) {
    console.error(e);
  }
}
