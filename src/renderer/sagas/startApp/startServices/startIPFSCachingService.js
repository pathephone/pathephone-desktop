import { fork } from 'redux-saga/effects';
import startCachedIPFSFilesReciever from './startIPFSCachingService/startCachedIPFSFilesReciever';
import startIPFSFilesCatch from './startIPFSCachingService/startIPFSFilesCatch';
import printRenderer from '~shared/utils/printRenderer';

function* startIPFSCachingService(api) {
  try {
    yield fork(startCachedIPFSFilesReciever, api);
    yield fork(startIPFSFilesCatch, api);
  } catch (e) {
    printRenderer.error(e);
  }
}

export default startIPFSCachingService;
