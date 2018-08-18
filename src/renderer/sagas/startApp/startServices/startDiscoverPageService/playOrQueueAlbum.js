import { call, put } from 'redux-saga/effects';

import {
  systemUiLocked,
  systemUiUnlocked,
  systemPlayedTracksRecieved,
  systemQueuedTracksRecieved,
} from '~actions/system';

import {
  uiAlbumPlayed,
  uiAlbumQueued,
} from '~actions/ui';

import getPlaylistTracksFromAlbums from '~shared/utils/getPlaylistTracksFromAlbums';

function* playOrQueueAlbum(args, { type, payload }) {
  yield put(systemUiLocked());
  try {
    const tracks = yield call(getPlaylistTracksFromAlbums, args, [payload]);
    if (type === uiAlbumPlayed.toString()) {
      yield put(systemPlayedTracksRecieved(tracks));
    }
    if (type === uiAlbumQueued.toString()) {
      yield put(systemQueuedTracksRecieved(tracks));
    }
  } catch (e) {
    console.error(e);
  }
  yield put(systemUiUnlocked());
}

export default playOrQueueAlbum;
