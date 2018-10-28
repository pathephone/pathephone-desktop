import { AnyAction } from 'redux';
import { getType } from 'typesafe-actions';
import { call, put } from 'redux-saga/effects';

import { actions } from '~renderer/state/actions';
import { getPlaylistTracksFromAlbums } from '~shared/utils/getPlaylistTracksFromAlbums';
import { IPlaylistTrack } from '~renderer/state/domains/playlist/types';

export function* playOrQueueAlbum({ type, payload }: AnyAction): Generator {
  yield put(actions.systemUiLocked());
  try {
    const tracks: IPlaylistTrack[] = yield call(getPlaylistTracksFromAlbums, [payload]);
    if (type === getType(actions.uiAlbumPlayed)) {
      yield put(actions.systemPlayedTracksRecieved(tracks));
    }
    if (type === getType(actions.uiAlbumQueued)) {
      yield put(actions.systemQueuedTracksRecieved(tracks));
    }
  } catch (e) {
    console.error(e);
  }
  yield put(actions.systemUiUnlocked());
}
