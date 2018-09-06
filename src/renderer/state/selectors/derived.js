import path from 'path';
import { createSelector } from 'reselect';

import * as simple from './simple';

export const isAppReady = state => simple.getAppStartProgress(state) === 100;

export const getCurrentTrack = (state) => {
  const index = simple.getCurrentTrackIndex(state);
  if (index !== null) {
    return simple.getPlaylistTracksByIndex(state)[index];
  }
  return undefined;
};

export const getCurrentTrackSource = (state) => {
  const track = getCurrentTrack(state);
  const gateway = simple.getIpfsGateway(state);
  return `${gateway}/ipfs/${track.audio}`;
};

export const isPlayerActive = state => simple.getCurrentTrackIndex(state) !== null;

export const isShareCandidatesRecieved = state => simple.getShareCandidates(state).length > 0;

export const getPlaylistTracksIndexes = createSelector(
  simple.getPlaylistTracksByIndex,
  tracks => Object.keys(tracks),
);

export const getPlaylistTracksCount = state => getPlaylistTracksIndexes(state).length;

export const getPlaylistTracksCIDs = createSelector(
  simple.getPlaylistTracksByIndex,
  tracks => Object.values(tracks).map(({ audio }) => audio),
);

export const getPlaylistUncachedTracksCIDs = createSelector(
  [getPlaylistTracksCIDs, simple.getCachedCIDs],
  (tracksCIDs, cachedCIDs) => tracksCIDs.filter(cid => !cachedCIDs[cid]),
);

export const isPlaylistEmpty = state => getPlaylistTracksCount(state) === 0;

export const getShareFormValue = state => simple.getShareCandidates(state)[0];

export const getShareCoverSrc = createSelector(
  [simple.getShareCandidates, simple.getIpfsApiEndpoint],
  (candidates, apiEndpoint) => {
    const candidate = candidates[0];
    const { cover: { image } } = candidate;
    if (image) {
      if (image.includes(path.sep)) {
        return `file:///${image}`;
      }
      return `${apiEndpoint}/cat?arg=${image}`;
    }
    return null;
  },
);

// DISCOVER PAGE

export const isDiscoverHasAlbums = state => (
  simple.getDiscoverFeedAlbums(state) !== null
  && simple.getDiscoverFeedAlbums(state).length > 0
);
export const isDiscoverSearchPerformed = state => !!simple.getDiscoverSearchValue(state);
export const getDiscoverSelectedCount = state => simple.getDiscoverSelectedIds(state).length;
export const isDiscoverSelected = state => getDiscoverSelectedCount(state) !== 0;
export const getDiscoverAlbumsIds = state => Array.from(simple.getDiscoverFeedAlbums(state).keys());
export const getDiscoverSelectedCids = createSelector(
  [simple.getDiscoverSelectedIds, simple.getDiscoverFeedAlbums],
  (selectedIds, albums) => selectedIds.map(id => albums[id].albumCid),
);
