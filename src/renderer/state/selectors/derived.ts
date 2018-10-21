import path from 'path';
import { createSelector, Selector } from 'reselect';

import { ICachedCIDsState } from '~renderer/state/domains/cachedCIDs';
import { IDiscoverPageAlbum } from '~renderer/ui/DiscoverPage/types';
import { IMetabinAlbum } from '~shared/types/domains/album';
import { IRootState } from '../rootState';
import * as simple from './simple';
import { IPlaylistTrack, IPlaylistTracksByIndex } from '~renderer/state/domains/playlist/types';

export const getCurrentTrack: (s: IRootState) => IPlaylistTrack | void = (
  state: IRootState
): IPlaylistTrack | void => {
  const index: string | null = simple.getCurrentTrackIndex(state);
  if (index !== null) {
    return simple.getPlaylistTracksByIndex(state)[index];
  }

  return undefined;
};

export const getCurrentTrackStrict: (s: IRootState) => IPlaylistTrack = (
  state: IRootState
): IPlaylistTrack => {
  const track: IPlaylistTrack | void = getCurrentTrack(state);
  if (!track) {
    throw new Error('Selector used in a wrong place.');
  }

  return track;
};

export const getCurrentTrackSource: (state: IRootState) => string = (
  state: IRootState
): string => {
  const track: IPlaylistTrack = getCurrentTrackStrict(state);
  const gateway: string | null = simple.getIpfsGateway(state);
  if (gateway) {
    return `${gateway}/ipfs/${track.audio}`;
  }
  throw new Error('Selector used too early.');
};

export const isPlayerActive: (s: IRootState) => boolean = (
  state: IRootState
): boolean => simple.getCurrentTrackIndex(state) !== null;

export const isShareCandidatesRecieved: (s: IRootState) => boolean = (
  state: IRootState
): boolean => simple.getShareCandidates(state).length > 0;

export const getPlaylistTracksIndexes: (s: IRootState) => string[] = (
  createSelector<IRootState, IPlaylistTracksByIndex, string[]>(
    simple.getPlaylistTracksByIndex,
    (tracks: { [key: string]: IPlaylistTrack }) => Object.keys(tracks)
  )
);

export const getPlaylistTracksCount: (s: IRootState) => number = (
  state: IRootState
): number => getPlaylistTracksIndexes(state).length;

export const getPlaylistTracksCIDs: (s: IRootState) => string[] = (
  createSelector<IRootState, IPlaylistTracksByIndex, string[]>(
    simple.getPlaylistTracksByIndex,
    (tracks: IPlaylistTracksByIndex) => Object.values(tracks).map(({ audio }: IPlaylistTrack) => audio)
  )
);

export const getPlaylistUncachedTracksCIDs: (s: IRootState) => string[] = (
  createSelector<IRootState, string[], ICachedCIDsState, string[]>(
    [getPlaylistTracksCIDs, simple.getCachedCIDs],
    (tracksCIDs: string[], cachedCIDs: ICachedCIDsState) => (
      tracksCIDs.filter((cid: string) => cachedCIDs[cid])
    )
  )
);

export const isPlaylistEmpty: (s: IRootState) => boolean = (
  state: IRootState
): boolean => getPlaylistTracksCount(state) === 0;

export const getShareFormValue: (s: IRootState) => IMetabinAlbum = (
  state: IRootState
): IMetabinAlbum => simple.getShareCandidates(state)[0];

export const getShareCoverSrc: (s: IRootState) => string | null = (
  createSelector<IRootState, IMetabinAlbum[], string | null, string | null>(
    [simple.getShareCandidates, simple.getIpfsApiEndpoint],
    (candidates: IMetabinAlbum[], apiEndpoint: string): string | null => {
      const candidate: IMetabinAlbum = candidates[0];
      const { cover: { image } } = candidate;
      if (image) {
        if (image.includes(path.sep)) {
          return `file:///${image}`;
        }

        return `${apiEndpoint}/cat?arg=${image}`;
      }

      return null;
    }
  )
);

// DISCOVER PAGE

export const isDiscoverHasAlbums: Selector<IRootState, boolean> = (
  state: IRootState
): boolean => {
  const albums: IDiscoverPageAlbum[] | null = simple.getDiscoverFeedAlbums(state);

  return albums !== null && albums.length > 0;
};

export const isDiscoverSearchPerformed: (s: IRootState) => boolean = (
  state: IRootState
): boolean => !!simple.getDiscoverSearchValue(state);

export const getDiscoverSelectedCount: (s: IRootState) => number = (
  state: IRootState
): number => simple.getDiscoverSelectedIds(state).length;

export const isDiscoverSelected: (s: IRootState) => boolean = (
  state: IRootState
): boolean => getDiscoverSelectedCount(state) !== 0;

export const getDiscoverAlbumsIds: Selector<IRootState, number[] | null> = (
  createSelector<IRootState, IDiscoverPageAlbum[] | null, number[] | null>(
    [simple.getDiscoverFeedAlbums],
    (albums: IDiscoverPageAlbum[] | null) => {
      if (albums) {
        return albums.map((a: IDiscoverPageAlbum, i: number) => i);
      }

      return null;
    }
  )
);
export const getDiscoverAlbumsIdsStrict: Selector<IRootState, number[]> = (
  createSelector<IRootState, number[] | null, number[]>(
    [getDiscoverAlbumsIds],
    (ids: number[] | null) => {
      if (ids) {
        return ids;
      }
      throw new Error('Selector used too early.');
    }
  )
);

export const getDiscoverSelectedCids: (s: IRootState) => string[] = (
  createSelector<IRootState, number[], IDiscoverPageAlbum[] | null, string[]>(
    [simple.getDiscoverSelectedIds, simple.getDiscoverFeedAlbums],
    (selectedIds: number[], albums: IDiscoverPageAlbum[]) => selectedIds.map(
      (id: number) => albums[id].albumCid
    )
  )
);
