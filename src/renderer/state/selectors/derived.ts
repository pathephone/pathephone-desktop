import path from 'path';
import { createSelector } from 'reselect';

import { IDiscoverPageAlbum } from '~renderer/ui/DiscoverPage/types';
import { playlistSelectors } from '~renderer/ui/Playlist';
import { IPlaylistTrack, IPlaylistTracksByIndex } from '~renderer/ui/Playlist/types';
import { IMetabinAlbum } from '~shared/types/domains/album';
import { IRootState } from '../rootState';
import * as simple from './simple';

export const isAppReady: (s: IRootState) => boolean = (
  state: IRootState
): boolean => simple.getAppStartProgress(state) === 100;

export const getCurrentTrack: (s: IRootState) => IPlaylistTrack | void = (
  state: IRootState
): IPlaylistTrack | void => {
  const index: string | null = playlistSelectors.getCurrentTrackIndex(state);
  if (index !== null) {
    return playlistSelectors.getPlaylistTracksByIndex(state)[index];
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
  const gateway: string = simple.getIpfsGateway(state);

  return `${gateway}/ipfs/${track.audio}`;
};

export const isPlayerActive: (s: IRootState) => boolean = (
  state: IRootState
): boolean => playlistSelectors.getCurrentTrackIndex(state) !== null;

export const isShareCandidatesRecieved: (s: IRootState) => boolean = (
  state: IRootState
): boolean => simple.getShareCandidates(state).length > 0;

export const getPlaylistTracksIndexes: (s: IRootState) => string[] = (
  createSelector<IRootState, IPlaylistTracksByIndex, string[]>(
    playlistSelectors.getPlaylistTracksByIndex,
    (tracks: { [key: string]: IPlaylistTrack }) => Object.keys(tracks)
  )
);

export const getPlaylistTracksCount: (s: IRootState) => number = (
  state: IRootState
): number => getPlaylistTracksIndexes(state).length;

export const getPlaylistTracksCIDs: (s: IRootState) => string[] = (
  createSelector<IRootState, IPlaylistTracksByIndex, string[]>(
    playlistSelectors.getPlaylistTracksByIndex,
    (tracks: IPlaylistTracksByIndex) => Object.values(tracks).map(({ audio }: IPlaylistTrack) => audio)
  )
);

export const getPlaylistUncachedTracksCIDs: (s: IRootState) => string[] = (
  createSelector<IRootState, string[], string[], string[]>(
    [getPlaylistTracksCIDs, simple.getCachedCIDs],
    (tracksCIDs: string[], cachedCIDs: string[]) => (
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
  createSelector<IRootState, IMetabinAlbum[], string, string | null>(
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

export const isDiscoverHasAlbums: (s: IRootState) => boolean = (
  state: IRootState
): boolean => (
  simple.getDiscoverFeedAlbums(state) !== null
  && simple.getDiscoverFeedAlbums(state).length > 0
);

export const isDiscoverSearchPerformed: (s: IRootState) => boolean = (
  state: IRootState
): boolean => !!simple.getDiscoverSearchValue(state);

export const getDiscoverSelectedCount: (s: IRootState) => number = (
  state: IRootState
): number => simple.getDiscoverSelectedIds(state).length;

export const isDiscoverSelected: (s: IRootState) => boolean = (
  state: IRootState
): boolean => getDiscoverSelectedCount(state) !== 0;

export const getDiscoverAlbumsIds: (s: IRootState) => string[] = (
  state: IRootState
): string[] => Array.from(simple.getDiscoverFeedAlbums(state).keys());

export const getDiscoverSelectedCids: (s: IRootState) => string[] = (
  createSelector<IRootState, string[], { [key: string]: IDiscoverPageAlbum }, string[]>(
    [simple.getDiscoverSelectedIds, simple.getDiscoverFeedAlbums],
    (selectedIds: string[], albums: { [key: string]: IDiscoverPageAlbum }) => selectedIds.map(
      (id: string) => albums[id].albumCid
    )
  )
);
