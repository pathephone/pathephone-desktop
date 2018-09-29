import { call, select } from 'redux-saga/effects';

import selectors from '#selectors';
import printRenderer from '~shared/utils/printRenderer';

function* cachePlaylistTracks(api) {
  const { cacheIPFSFilesByCIDs } = api;
  const uncachedCIDs = yield select(selectors.getPlaylistUncachedTracksCIDs);
  try {
    yield call(cacheIPFSFilesByCIDs, uncachedCIDs);
  } catch (e) {
    printRenderer.error(e);
  }
}

export default cachePlaylistTracks;
