import { call, put, select } from 'redux-saga/effects'

import deleteAlbumsFromCollection from '~utils/deleteAlbumsFromCollection'

import {
  systemDiscoverSelectedActionSucceed,
  systemDiscoverSelectedActionFailed,
  systemUiLocked,
  systemUiUnlocked
} from '#actions-system'
import { getDiscoverSelectedAlbums } from '#selectors'

function * handleDiscoverSelectedDelete (args) {
  yield put(systemUiLocked())
  try {
    const selectedAlbums = yield select(getDiscoverSelectedAlbums)
    yield call(deleteAlbumsFromCollection, args, selectedAlbums)
    yield put(systemDiscoverSelectedActionSucceed())
  } catch (e) {
    yield put(systemDiscoverSelectedActionFailed(e.message))
  }
  yield put(systemUiUnlocked())
}

export default handleDiscoverSelectedDelete
