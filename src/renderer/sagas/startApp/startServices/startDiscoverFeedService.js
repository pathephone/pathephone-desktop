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
} from '~actions/ui'

import deleteSelectedAlbums from './startDiscoverFeedService/deleteSelectedAlbums'
import fetchDiscoverAlbums from './startDiscoverFeedService/fetchDiscoverAlbums'
import playOrQueueSelectedAlbums from './startDiscoverFeedService/playOrQueueSelectedAlbums'
import playOrQueueAlbum from './startDiscoverFeedService/playOrQueueAlbum'

function * startDiscoverFeedService (apis) {
  yield all([
    takeLatest([
      uiDiscoverAlbumsRequested,
      uiDiscoverSearchPerformed,
      uiDiscoverSearchCleared
    ], fetchDiscoverAlbums, apis),
    takeEvery(uiDiscoverSelectedDeleted, deleteSelectedAlbums, apis),
    takeEvery([
      uiDiscoverSelectedPlayed,
      uiDiscoverSelectedQueued
    ], playOrQueueSelectedAlbums, apis),
    takeEvery([
      uiAlbumPlayed,
      uiAlbumQueued
    ], playOrQueueAlbum, apis)
  ])
  yield put(uiDiscoverAlbumsRequested())
}

export default startDiscoverFeedService
