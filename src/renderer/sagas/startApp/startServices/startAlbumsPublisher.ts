import { Channel, eventChannel } from 'redux-saga';
import { call, takeEvery } from 'redux-saga/effects';

import { albumsCollectionApi, albumsGateApi } from '~renderer/api/intex';
import { IS_OFFLINE } from '~shared/config';
import { ALBUMS_APPEARENCE_INTERVAL, ALBUMS_PUBLISH_INTERVAL } from '~shared/data/constants';
import { IMetabinAlbum } from '~shared/types/domains/album';

function getOutdatedAlbumsChannel(): Channel<IMetabinAlbum[]> {
  return eventChannel((emit: (p: IMetabinAlbum[]) => void) => {
    const handleTick: () => Promise<void> = async (): Promise<void> => {
      const period: number = new Date().getTime() - ALBUMS_APPEARENCE_INTERVAL;
      const albums: IMetabinAlbum[] = await albumsCollectionApi.findOutdatedAlbumsInCollection(period);
      emit(albums);
    };
    const interval: number = window.setInterval(handleTick, ALBUMS_PUBLISH_INTERVAL);

    return (): void => {
      clearInterval(interval);
    };
  });
}

function* publishAlbum(albums: IMetabinAlbum[]): Generator {
  yield call(albumsGateApi.publishAlbumsByCIDs, albums);
}

export function* startAlbumsPublisher(): Generator {
  if (!IS_OFFLINE) {
    const outdatedAlbumsChannel: Channel<IMetabinAlbum[]> = yield call(getOutdatedAlbumsChannel);
    yield takeEvery(outdatedAlbumsChannel, publishAlbum);
  }
}
