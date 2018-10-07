import { call, select } from 'redux-saga/effects';

import selectors from '#selectors';
import { customIpfsApi } from '~renderer/api/intex';

export function* cachePlaylistTracks(): Generator {
  const uncachedCIDs: string[] = yield select(selectors.getPlaylistUncachedTracksCIDs);
  try {
    yield call(customIpfsApi.cacheIpfsFilesByCids, uncachedCIDs);
  } catch (e) {
    console.error(e);
  }
}
