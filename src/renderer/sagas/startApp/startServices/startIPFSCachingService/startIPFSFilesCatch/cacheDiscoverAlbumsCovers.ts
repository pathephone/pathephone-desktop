import { AnyAction } from 'redux';
import { call } from 'redux-saga/effects';

import { customIpfsApi } from '~renderer/api/intex';
import { IDiscoverPageAlbum } from '~renderer/ui/DiscoverPage/types';

const handleMap: (a: IDiscoverPageAlbum) => string = (
  a: IDiscoverPageAlbum
): string => a.albumCoverCid;

const getAlbumsCoversCIDs: (a: IDiscoverPageAlbum[]) => string[] = (
  albums: IDiscoverPageAlbum[]
): string[] => albums.map(handleMap);

export function* cacheDiscoverAlbumsCovers({ payload }: AnyAction): Generator {
  const uncachedCIDs: string[] = getAlbumsCoversCIDs(payload);
  try {
    yield call(customIpfsApi.cacheIpfsFilesByCids, uncachedCIDs);
  } catch (e) {
    console.error(e);
  }
}
