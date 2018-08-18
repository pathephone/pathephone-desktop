import { takeLatest, takeEvery, all } from 'redux-saga/effects';

import actions from '#actions';

import deleteSelectedAlbums from './startDiscoverPageService/deleteSelectedAlbums';
import playOrQueueSelectedAlbums from './startDiscoverPageService/playOrQueueSelectedAlbums';
import playOrQueueAlbum from './startDiscoverPageService/playOrQueueAlbum';
import fetchDiscoverAlbums from './startDiscoverPageService/fetchDiscoverAlbums';

function* startDiscoverPageService(apis) {
  yield all([
    takeLatest([
      actions.uiDiscoverSearchPerformed,
      actions.uiDiscoverSearchCleared,
      actions.systemDiscoverAlbumsFetch,
    ], fetchDiscoverAlbums, apis),
    takeEvery(actions.uiDiscoverSelectedDeleted, deleteSelectedAlbums, apis),
    takeEvery([
      actions.uiDiscoverSelectedPlayed,
      actions.uiDiscoverSelectedQueued,
    ], playOrQueueSelectedAlbums, apis),
    takeEvery([
      actions.uiAlbumPlayed,
      actions.uiAlbumQueued,
    ], playOrQueueAlbum, apis),
  ]);
}

export default startDiscoverPageService;
