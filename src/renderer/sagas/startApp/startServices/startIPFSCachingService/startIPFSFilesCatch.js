import { call, takeEvery } from 'redux-saga/effects';

import actions from '#actions';

import cachePlaylistTracks from './startIPFSFilesCatch/cachePlaylistTracks';
import cacheDiscoverAlbumsCovers from './startIPFSFilesCatch/cacheDiscoverAlbumsCovers';

function* startIPFSFilesCatch(api) {
  yield call(cachePlaylistTracks, api);
  yield takeEvery(
    [
      actions.systemPlayedTracksRecieved,
      actions.systemQueuedTracksRecieved,
    ], cachePlaylistTracks, api,
  );
  yield takeEvery(
    actions.systemDiscoverAlbumsFetchSucceed, cacheDiscoverAlbumsCovers, api,
  );
}

export default startIPFSFilesCatch;
