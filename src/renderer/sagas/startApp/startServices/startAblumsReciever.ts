import { call, put, takeEvery } from 'redux-saga/effects';

import { IS_OFFLINE } from '~shared/config';

import { Channel } from 'redux-saga';
import { albumsCollectionApi, albumsGateApi } from '~renderer/api/intex';
import { actions } from '~renderer/state/actions';
import { ICollectionStat } from '~renderer/types/api';
import { IMetabinAlbum } from '~shared/types/domains/album';
import reduxSagaTicker from '~shared/utils/reduxSagaTicker';

function* transitCachedAlbumsToStore(): Generator {
  try {
    const albums: IMetabinAlbum[] = yield call(albumsGateApi.getRecievedAlbumsCache);
    if (albums.length > 0) {
      // tslint:disable-next-line no-suspicious-comment
      // TODO: find out why ts doesn't complain about types incompatibility
      const collectionStat: ICollectionStat = yield call<IMetabinAlbum[]>(
        albumsCollectionApi.saveOrUpdateAlbums, albums
       );
      yield put(actions.systemAlbumsRecievedCacheTransited(collectionStat));
    }
  } catch (e) {
    console.error(e);
  }
}

export function* startAlbumsReciever(): Generator {
  if (!IS_OFFLINE) {
    yield call(albumsGateApi.subscribeToAlbumsGate);
    const ticker: Channel<boolean> = yield call(reduxSagaTicker, 10000);
    yield takeEvery(ticker, transitCachedAlbumsToStore);
  }
}
