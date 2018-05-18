import { takeEvery, call, put } from 'redux-saga/effects'

import deleteAlbumsFromCollection from '~utils/deleteAlbumsFromCollection'

import { uiAlbumDeleted } from '#actions-ui'

import {
  systemAlbumDeleteSucceed,
  systemAlbumDeleteFailed,
  systemUiLocked,
  systemUiUnlocked
} from '#actions-system'

function * handleSingleAlbumDelete (args, { payload }) {
  yield put(systemUiLocked())
  try {
    yield call(deleteAlbumsFromCollection, args, [payload])
    yield put(systemAlbumDeleteSucceed())
  } catch (e) {
    yield put(systemAlbumDeleteFailed(e.message))
  }
  yield put(systemUiUnlocked())
}

function * startAlbumsDeletingService (args) {
  yield takeEvery(uiAlbumDeleted, handleSingleAlbumDelete, args)
}

export default startAlbumsDeletingService
