import { takeEvery, fork, call } from 'redux-saga/effects';

import { systemPlayedTracksRecieved, systemQueuedTracksRecieved } from '~actions/system';

import cachePlaylistTracks from './startTracksCache/cachePlaylistTracks';
import startCachedCIDsReciever from './startTracksCache/startCachedCIDsReciever';

function* startTracksCache(api) {
  yield fork(startCachedCIDsReciever, api);
  yield call(cachePlaylistTracks, api);
  yield takeEvery(
    [systemPlayedTracksRecieved, systemQueuedTracksRecieved], cachePlaylistTracks, api,
  );
}

export default startTracksCache;
