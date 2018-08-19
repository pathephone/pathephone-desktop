import { takeEvery, fork, call } from 'redux-saga/effects';

import actions from '#actions';

import cachePlaylistTracks from './startTracksCache/cachePlaylistTracks';
import startCachedCIDsReciever from './startTracksCache/startCachedCIDsReciever';

function* startTracksCache(api) {
  yield fork(startCachedCIDsReciever, api);
  yield call(cachePlaylistTracks, api);
  yield takeEvery(
    [
      actions.actions.systemPlayedTracksRecieved,
      actions.actions.systemQueuedTracksRecieved,
    ], cachePlaylistTracks, api,
  );
}

export default startTracksCache;
