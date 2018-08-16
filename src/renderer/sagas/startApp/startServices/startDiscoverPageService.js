import { takeLatest, takeEvery, all } from 'redux-saga/effects';

import {
  uiDiscoverSelectedDeleted,
  uiDiscoverSelectedPlayed,
  uiDiscoverSelectedQueued,
  uiDiscoverSearchPerformed,
  uiAlbumPlayed,
  uiAlbumQueued,
  uiDiscoverSearchCleared,
} from '~actions/ui';
import {
  systemDiscoverAlbumsFetch,
} from '~actions/system';

import deleteSelectedAlbums from './startDiscoverPageService/deleteSelectedAlbums';
import playOrQueueSelectedAlbums from './startDiscoverPageService/playOrQueueSelectedAlbums';
import playOrQueueAlbum from './startDiscoverPageService/playOrQueueAlbum';
import fetchDiscoverAlbums from './startDiscoverPageService/fetchDiscoverAlbums';

function* startDiscoverPageService(apis) {
  yield all([
    takeLatest([
      uiDiscoverSearchPerformed,
      uiDiscoverSearchCleared,
      systemDiscoverAlbumsFetch,
    ], fetchDiscoverAlbums, apis),
    takeEvery(uiDiscoverSelectedDeleted, deleteSelectedAlbums, apis),
    takeEvery([
      uiDiscoverSelectedPlayed,
      uiDiscoverSelectedQueued,
    ], playOrQueueSelectedAlbums, apis),
    takeEvery([
      uiAlbumPlayed,
      uiAlbumQueued,
    ], playOrQueueAlbum, apis),
  ]);
}

export default startDiscoverPageService;
