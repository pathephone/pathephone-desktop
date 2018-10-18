import { call, put, select } from 'redux-saga/effects';

import { albumsCollectionApi } from '~renderer/api/intex';
import { actions } from '~renderer/state/actions';
import selectors from '~renderer/state/selectors';
import { ICollectionStat } from '~renderer/types/api';

export function* deleteSelectedAlbums(): Generator {
  yield put(actions.systemUiLocked());
  try {
    const selectedAlbums: string[] = yield select(selectors.getDiscoverSelectedCids);
    const collectionStat: ICollectionStat = yield call(albumsCollectionApi.deleteAlbumsFromCollection, selectedAlbums);
    yield put(actions.systemDiscoverSelectedActionSucceed(collectionStat));
  } catch (e) {
    yield put(actions.systemDiscoverSelectedActionFailed({ errorMessage: e.message }));
  }
  yield put(actions.systemUiUnlocked());
}
