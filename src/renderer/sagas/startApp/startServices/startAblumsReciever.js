import { call, takeEvery, put } from 'redux-saga/effects';

import { systemAlbumsRecievedCacheTransited } from '~actions/system';
import { IS_OFFLINE } from '~shared/config';

import reduxSagaTicker from '~shared/utils/reduxSagaTicker';

function* transitCachedAlbumsToStore(apis) {
  const {
    saveOrUpdateAlbums,
    getRecievedAlbumsCache,
  } = apis;
  try {
    const albums = yield call(getRecievedAlbumsCache);
    if (albums.length > 0) {
      const collectionStat = yield call(saveOrUpdateAlbums, albums);
      yield put(systemAlbumsRecievedCacheTransited(collectionStat));
    }
  } catch (e) {
    console.error(e);
  }
}

function* startAlbumsReciever(apis) {
  const {
    subscribeToAlbumsGate,
  } = apis;
  if (!IS_OFFLINE) {
    yield call(subscribeToAlbumsGate);
    const ticker = yield call(reduxSagaTicker, 10000);
    yield takeEvery(ticker, transitCachedAlbumsToStore, apis);
  }
}

export default startAlbumsReciever;
