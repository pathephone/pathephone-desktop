import { fork } from 'redux-saga/effects';
import startCachedIPFSFilesReciever from './startIPFSCachingService/startCachedIPFSFilesReciever';
import startIPFSFilesCatch from './startIPFSCachingService/startIPFSFilesCatch';

function* startIPFSCachingService(api) {
  try {
    yield fork(startCachedIPFSFilesReciever, api);
    yield fork(startIPFSFilesCatch, api);
  } catch (e) {
    console.error(e);
  }
}

export default startIPFSCachingService;
