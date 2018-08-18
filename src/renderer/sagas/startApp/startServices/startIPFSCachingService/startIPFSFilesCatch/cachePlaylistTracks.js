import { call, select } from 'redux-saga/effects';

import selectors from '#selectors';

function* cachePlaylistTracks(api) {
  const { cacheIPFSFilesByCIDs } = api;
  const uncachedCIDs = yield select(selectors.getPlaylistUncachedTracksCIDs);
  try {
    yield call(cacheIPFSFilesByCIDs, uncachedCIDs);
  } catch (e) {
    console.error(e);
  }
}

export default cachePlaylistTracks;
