import { AnyAction } from 'redux';
import { Channel } from 'redux-saga';
import { call, put, take } from 'redux-saga/effects';

import { IAlbumsTextSearchParams } from '~renderer/api/albumsCollectionApi';
import { albumsCollectionApi } from '~renderer/api/intex';
import actions from '~renderer/state/actions';
import { IDiscoverPageAlbum } from '~renderer/ui/DiscoverPage/types';
import { DISCOVER_FEED_LIMIT } from '~shared/data/constants';
import { IMetabinAlbum } from '~shared/types/domains/album';
import normalizeCollectionAlbum from '~shared/utils/normalizeCollectionAlbum';

interface IChannelData {
  albums: IMetabinAlbum[];
  error: Error;
}

export function* fetchDiscoverAlbums({ payload }: AnyAction): Generator {
  const params: IAlbumsTextSearchParams = { limit: DISCOVER_FEED_LIMIT, text: payload };
  const albumsSource: Channel<IChannelData> = yield call(
    albumsCollectionApi.findAlbumsInCollection, params
  );
  try {
    // tslint:disable-next-line no-constant-condition
    while (true) {
      const { albums, error } = yield take(albumsSource);
      if (error) { throw error; }
      const normalizedAlbums: IDiscoverPageAlbum[] = albums.map(normalizeCollectionAlbum);
      yield put(actions.systemDiscoverAlbumsFetchSucceed(normalizedAlbums));
    }
  } catch (e) {
    console.error(e);
    yield put(actions.systemDiscoverAlbumsFetchFailed({ errorMessage: e.message }));
  }
}
