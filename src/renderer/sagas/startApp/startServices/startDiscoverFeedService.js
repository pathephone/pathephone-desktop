import { takeLatest, put, takeEvery, all } from 'redux-saga/effects'

import {
  uiDiscoverAlbumsRequested,
  uiDiscoverSelectedDeleted,
  uiDiscoverSelectedPlayed,
  uiDiscoverSelectedQueued,
  uiDiscoverSearchPerformed,
  uiDiscoverSearchCleared,
  uiAlbumPlayed,
  uiAlbumQueued
} from '#actions-ui'

import deleteSelectedAlbums from './startDiscoverFeedService/deleteSelectedAlbums'
import fetchDiscoverAlbums from './startDiscoverFeedService/fetchDiscoverAlbums'
import playOrQueueSelectedAlbums from './startDiscoverFeedService/playOrQueueSelectedAlbums'
import playOrQueueAlbum from './startDiscoverFeedService/playOrQueueAlbum'

function * startDiscoverFeedService (args) {
  yield all([
    takeLatest([
      uiDiscoverAlbumsRequested,
      uiDiscoverSearchPerformed,
      uiDiscoverSearchCleared
    ], fetchDiscoverAlbums, args),
    takeEvery(uiDiscoverSelectedDeleted, deleteSelectedAlbums, args),
    takeEvery([
      uiDiscoverSelectedPlayed,
      uiDiscoverSelectedQueued
    ], playOrQueueSelectedAlbums, args),
    takeEvery([
      uiAlbumPlayed,
      uiAlbumQueued
    ], playOrQueueAlbum, args)
  ])
  yield put(uiDiscoverAlbumsRequested())
}

export default startDiscoverFeedService
