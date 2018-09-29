import { call, put } from 'redux-saga/effects';

import actions from '#actions';

import getPlaylistTracksFromAlbums from '~shared/utils/getPlaylistTracksFromAlbums';
import printRenderer from '~shared/utils/printRenderer';

function* playOrQueueAlbum(args, { type, payload }) {
  yield put(actions.systemUiLocked());
  try {
    const tracks = yield call(getPlaylistTracksFromAlbums, args, [payload]);
    if (type === actions.uiAlbumPlayed.toString()) {
      yield put(actions.systemPlayedTracksRecieved(tracks));
    }
    if (type === actions.uiAlbumQueued.toString()) {
      yield put(actions.systemQueuedTracksRecieved(tracks));
    }
  } catch (e) {
    printRenderer.error(e);
  }
  yield put(actions.systemUiUnlocked());
}

export default playOrQueueAlbum;
