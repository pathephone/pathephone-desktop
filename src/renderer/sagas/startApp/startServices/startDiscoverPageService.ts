import { all, takeEvery, takeLatest } from 'redux-saga/effects';

import { deleteSelectedAlbums } from '~renderer/sagas/startApp/startServices/startDiscoverPageService/deleteSelectedAlbums';
import { fetchDiscoverAlbums } from '~renderer/sagas/startApp/startServices/startDiscoverPageService/fetchDiscoverAlbums';
import { playOrQueueAlbum } from '~renderer/sagas/startApp/startServices/startDiscoverPageService/playOrQueueAlbum';
import { playOrQueueSelectedAlbums } from '~renderer/sagas/startApp/startServices/startDiscoverPageService/playOrQueueSelectedAlbums';
import actions from '~renderer/state/actions';

export function* startDiscoverPageService(): Generator {
  yield all([
    takeLatest([
      actions.uiDiscoverSearchPerformed,
      actions.uiDiscoverSearchCleared,
      actions.systemDiscoverAlbumsFetch
    ],         fetchDiscoverAlbums),
    takeEvery(actions.uiDiscoverSelectedDeleted, deleteSelectedAlbums),
    takeEvery([
      actions.uiDiscoverSelectedPlayed,
      actions.uiDiscoverSelectedQueued
    ],        playOrQueueSelectedAlbums),
    takeEvery([
      actions.uiAlbumPlayed,
      actions.uiAlbumQueued
    ],        playOrQueueAlbum)
  ]);
}
