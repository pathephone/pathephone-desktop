import { put, call } from 'redux-saga/effects';

import actions from '#actions';

function* updateAlbumsCollectionInfo({ getAlbumsCollectionInfo }) {
  const dbInfo = yield call(getAlbumsCollectionInfo);
  yield put(actions.systemAlbumsCollectionInfoRecieved(dbInfo));
}

function* startAlbumsCollectionInfo(apis) {
  yield updateAlbumsCollectionInfo(apis);
}

export default startAlbumsCollectionInfo;
