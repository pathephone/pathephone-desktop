import { AnyAction } from 'redux';
import { call, put, select } from 'redux-saga/effects';
import { getType } from 'typesafe-actions';

import { actions } from '~renderer/state/actions';
import selectors from '~renderer/state/selectors';
import { getPlaylistTracksFromAlbums } from '~shared/utils/getPlaylistTracksFromAlbums';
import { IPlaylistTrack } from '~renderer/state/domains/playlist/types';

export function* playOrQueueSelectedAlbums({ type }: AnyAction): Generator {
  yield put(actions.systemUiLocked());
  try {
    const selectedAlbums: string[] = yield select(selectors.getDiscoverSelectedCids);
    const tracks: IPlaylistTrack[] = yield call(getPlaylistTracksFromAlbums, selectedAlbums);
    if (type === getType(actions.uiDiscoverSelectedPlayed)) {
      yield put(actions.systemPlayedTracksRecieved(tracks));
    }
    if (type === getType(actions.uiDiscoverSelectedQueued)) {
      yield put(actions.systemQueuedTracksRecieved(tracks));
    }
    yield put(actions.systemDiscoverSelectedActionSucceed(undefined));
  } catch (e) {
    yield put(actions.systemDiscoverSelectedActionFailed(e.message));
  }
  yield put(actions.systemUiUnlocked());
}
