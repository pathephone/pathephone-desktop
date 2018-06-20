import { takeEvery, call, put } from 'redux-saga/effects'

import { uiAlbumDeleted } from '~actions/ui'

import {
  systemAlbumDeleteSucceed,
  systemAlbumDeleteFailed,
  systemUiLocked,
  systemUiUnlocked
} from '~actions/system'

function * handleSingleAlbumDelete (apis, { payload }) {
  const { deleteAlbumsFromCollection } = apis
  yield put(systemUiLocked())
  try {
    yield call(deleteAlbumsFromCollection, [ payload ])
    yield put(systemAlbumDeleteSucceed())
  } catch (e) {
    yield put(systemAlbumDeleteFailed(e.message))
  }
  yield put(systemUiUnlocked())
}

function * startAlbumsDeletingService (apis) {
  yield takeEvery(uiAlbumDeleted, handleSingleAlbumDelete, apis)
}

export default startAlbumsDeletingService
