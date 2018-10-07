import { call, put } from 'redux-saga/effects';

import actions from '#actions';
import { albumsCollectionApi } from '~renderer/api/intex';
import { ICollectionStat } from '~renderer/types/api';

export function* startAlbumsCollectionInfo(): Generator {
  const dbInfo: ICollectionStat = yield call(albumsCollectionApi.getAlbumsCollectionInfo);
  yield put(actions.systemAlbumsCollectionInfoRecieved(dbInfo));
}
