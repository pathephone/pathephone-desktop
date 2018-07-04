import { takeLatest, takeEvery, all } from 'redux-saga/effects'

import {
  uiDiscoverSelectedDeleted,
  uiDiscoverSelectedPlayed,
  uiDiscoverSelectedQueued,
  uiDiscoverSearchPerformed,
  uiAlbumPlayed,
  uiAlbumQueued,
  uiDiscoverPageOpened,
  uiDiscoverSearchCleared,
  uiDiscoverRefreshButtonClicked
} from '~actions/ui'
import {
  systemDiscoverFetch
} from '~actions/system'

import deleteSelectedAlbums from './startDiscoverPageService/deleteSelectedAlbums'
import playOrQueueSelectedAlbums from './startDiscoverPageService/playOrQueueSelectedAlbums'
import playOrQueueAlbum from './startDiscoverPageService/playOrQueueAlbum'
import fetchDiscoverAlbums from './startDiscoverPageService/fetchDiscoverAlbums'

function * startDiscoverPageService (apis) {
  yield all([
    takeLatest([
      uiDiscoverPageOpened,
      uiDiscoverSearchPerformed,
      uiDiscoverSearchCleared,
      uiDiscoverRefreshButtonClicked,
      systemDiscoverFetch
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
}

export default startDiscoverPageService
