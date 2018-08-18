import { call, put, select } from 'redux-saga/effects';

import actions from '#actions';

import {
  getDiscoverSelectedCids,
} from '#selectors';

function* handleDiscoverSelectedDelete(apis) {
  const { deleteAlbumsFromCollection } = apis;
  yield put(actions.systemUiLocked());
  try {
    const selectedAlbums = yield select(getDiscoverSelectedCids);
    const collectionStat = yield call(deleteAlbumsFromCollection, selectedAlbums);
    yield put(actions.systemDiscoverSelectedActionSucceed(collectionStat));
  } catch (e) {
    yield put(actions.systemDiscoverSelectedActionFailed({ errorMessage: e.message }));
  }
  yield put(actions.systemUiUnlocked());
}

export default handleDiscoverSelectedDelete;
