import { AnyAction } from 'redux';
import { call, put } from 'redux-saga/effects';

import { actions } from '~renderer/state/actions';
import { getPlaylistTracksFromAlbums } from '~shared/utils/getPlaylistTracksFromAlbums';
import { IPlaylistTrack } from '~renderer/state/domains/playlist/types';

export function* playOrQueueAlbum({ type, payload }: AnyAction): Generator {
  yield put(actions.systemUiLocked());
  try {
    const tracks: IPlaylistTrack[] = yield call(getPlaylistTracksFromAlbums, [payload]);
    if (type === actions.uiAlbumPlayed.toString()) {
      yield put(actions.systemPlayedTracksRecieved(tracks));
    }
    if (type === actions.uiAlbumQueued.toString()) {
      yield put(actions.systemQueuedTracksRecieved(tracks));
    }
  } catch (e) {
    console.error(e);
  }
  yield put(actions.systemUiUnlocked());
}
