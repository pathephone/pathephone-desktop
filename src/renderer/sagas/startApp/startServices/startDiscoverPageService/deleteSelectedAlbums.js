import { call, put, select } from 'redux-saga/effects';

import {
  systemDiscoverSelectedActionSucceed,
  systemDiscoverSelectedActionFailed,
  systemUiLocked,
  systemUiUnlocked,
} from '~actions/system';

import {
  getDiscoverSelectedCids,
} from '#selectors';

function* handleDiscoverSelectedDelete(apis) {
  const { deleteAlbumsFromCollection } = apis;
  yield put(systemUiLocked());
  try {
    const selectedAlbums = yield select(getDiscoverSelectedCids);
    const collectionStat = yield call(deleteAlbumsFromCollection, selectedAlbums);
    yield put(systemDiscoverSelectedActionSucceed(collectionStat));
  } catch (e) {
    yield put(systemDiscoverSelectedActionFailed({ errorMessage: e.message }));
  }
  yield put(systemUiUnlocked());
}

export default handleDiscoverSelectedDelete;
