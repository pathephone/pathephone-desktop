import { put, call } from 'redux-saga/effects';

import { systemAlbumsCollectionInfoRecieved } from '~actions/system';

function* updateAlbumsCollectionInfo({ getAlbumsCollectionInfo }) {
  const dbInfo = yield call(getAlbumsCollectionInfo);
  yield put(systemAlbumsCollectionInfoRecieved(dbInfo));
}

function* startAlbumsCollectionInfo(apis) {
  yield updateAlbumsCollectionInfo(apis);
}

export default startAlbumsCollectionInfo;
