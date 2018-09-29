import { put, call, take } from 'redux-saga/effects';

import normalizeCollectionAlbum from '~shared/utils/normalizeCollectionAlbum';

import actions from '#actions';

import { DISCOVER_FEED_LIMIT } from '~shared/data/constants';
import printRenderer from '~shared/utils/printRenderer';

function* fetchDiscoverAlbums(apis, { payload }) {
  const {
    findAlbumsInCollection,
  } = apis;
  const params = { limit: DISCOVER_FEED_LIMIT, text: payload };
  const albumsSource = yield call(findAlbumsInCollection, params);
  try {
    while (true) {
      const { albums, error } = yield take(albumsSource);
      if (error) throw error;
      const normalizedAlbums = albums.map(normalizeCollectionAlbum);
      yield put(actions.systemDiscoverAlbumsFetchSucceed(normalizedAlbums));
    }
  } catch (e) {
    printRenderer.error(e);
    yield put(actions.systemDiscoverAlbumsFetchFailed({ errorMessage: e.message }));
  }
}

export default fetchDiscoverAlbums;
