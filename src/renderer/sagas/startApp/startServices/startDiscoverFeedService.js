import { takeLatest, put, takeEvery, all } from 'redux-saga/effects'

import {
  uiDiscoverAlbumsRequested,
  uiDiscoverSelectedDeleted,
  uiDiscoverSelectedPlayed,
  uiDiscoverSelectedQueued,
  uiDiscoverSearchPerformed,
  uiDiscoverSearchCleared
} from '#actions-ui'

import deleteSelectedAlbums from './startDiscoverFeedService/deleteSelectedAlbums'
import fetchDiscoverAlbums from './startDiscoverFeedService/fetchDiscoverAlbums'
import playOrQueueSelectedAlbums from './startDiscoverFeedService/playOrQueueSelectedAlbums'

function * startDiscoverFeedService (args) {
  yield all([
    takeLatest([
      uiDiscoverAlbumsRequested,
      uiDiscoverSearchPerformed,
      uiDiscoverSearchCleared
    ], fetchDiscoverAlbums, args),
    takeEvery(uiDiscoverSelectedDeleted, deleteSelectedAlbums, args),
    takeEvery(uiDiscoverSelectedPlayed, playOrQueueSelectedAlbums, args),
    takeEvery(uiDiscoverSelectedQueued, playOrQueueSelectedAlbums, args)
  ])
  yield put(uiDiscoverAlbumsRequested())
}

export default startDiscoverFeedService
