import { call, takeEvery } from 'redux-saga/effects';

import { actions } from '~renderer/state/actions';
import { cacheDiscoverAlbumsCovers } from './startIPFSFilesCatch/cacheDiscoverAlbumsCovers';
import { cachePlaylistTracks } from './startIPFSFilesCatch/cachePlaylistTracks';

export function* startIPFSFilesCatch(): Generator {
  yield call(cachePlaylistTracks);
  yield takeEvery(
    [
      actions.systemPlayedTracksRecieved,
      actions.systemQueuedTracksRecieved
    ],
    cachePlaylistTracks
  );
  yield takeEvery(
    actions.systemDiscoverAlbumsFetchSucceed, cacheDiscoverAlbumsCovers
  );
}
