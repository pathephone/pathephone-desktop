import { call, select } from 'redux-saga/effects';

import selectors from '#selectors';

function* cachePlaylistTracks(api) {
  const { cacheIpfsFilesByCids } = api;
  const uncachedCIDs = yield select(selectors.getPlaylistUncachedTracksCIDs);
  try {
    yield call(cacheIpfsFilesByCids, uncachedCIDs);
  } catch (e) {
    console.error(e);
  }
}

export default cachePlaylistTracks;
