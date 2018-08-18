import { call, put, select } from 'redux-saga/effects';

import getPlaylistTracksFromAlbums from '~shared/utils/getPlaylistTracksFromAlbums';

import actions from '#actions';
import selectors from '#selectors';

function* playOrQueueSelectedAlbums(args, { type }) {
  yield put(actions.systemUiLocked());
  try {
    const selectedAlbums = yield select(selectors.getDiscoverSelectedCids);
    const tracks = yield call(getPlaylistTracksFromAlbums, args, selectedAlbums);
    if (type === actions.uiDiscoverSelectedPlayed.toString()) {
      yield put(actions.systemPlayedTracksRecieved(tracks));
    }
    if (type === actions.uiDiscoverSelectedQueued.toString()) {
      yield put(actions.systemQueuedTracksRecieved(tracks));
    }
    yield put(actions.systemDiscoverSelectedActionSucceed());
  } catch (e) {
    yield put(actions.systemDiscoverSelectedActionFailed(e.message));
  }
  yield put(actions.systemUiUnlocked());
}

export default playOrQueueSelectedAlbums;
