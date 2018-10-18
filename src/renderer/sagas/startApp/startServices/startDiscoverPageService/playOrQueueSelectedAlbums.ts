import { AnyAction } from 'redux';
import { call, put, select } from 'redux-saga/effects';

import { actions } from '~renderer/state/actions';
import selectors from '~renderer/state/selectors';
import { IPlaylistTrack } from '~renderer/ui/Playlist/types';
import { getPlaylistTracksFromAlbums } from '~shared/utils/getPlaylistTracksFromAlbums';

export function* playOrQueueSelectedAlbums({ type }: AnyAction): Generator {
  yield put(actions.systemUiLocked());
  try {
    const selectedAlbums: string[] = yield select(selectors.getDiscoverSelectedCids);
    const tracks: IPlaylistTrack[] = yield call(getPlaylistTracksFromAlbums, selectedAlbums);
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
