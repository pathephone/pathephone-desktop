import { call, select } from 'redux-saga/effects';

import { customIpfsApi } from '~renderer/api/intex';
import selectors from '~renderer/state/selectors';

export function* cachePlaylistTracks(): Generator {
  const uncachedCIDs: string[] = yield select(selectors.getPlaylistUncachedTracksCIDs);
  try {
    yield call(customIpfsApi.cacheIpfsFilesByCids, uncachedCIDs);
  } catch (e) {
    console.error(e);
  }
}
