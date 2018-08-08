import path from 'path';
import { createSelector } from 'reselect';

import {
  getAppStartProgress,
  getDiscoverFeedAlbums,
  getDiscoverSelectedIds,
  getDiscoverSearchValue,
  getCurrentTrackIndex,
  getPlaylistTracksByIndex,
  getShareCandidates,
  getNotifications,
  getIpfsGateway,
} from '#selectors';
import { getIpfsApiEndpoint } from '../domains/ipfsInfo';
import { getCachedCIDs } from '../domains/cachedCIDs';

export const isAppReady = state => getAppStartProgress(state) === 100;

export const getCurrentTrack = (state) => {
  const index = getCurrentTrackIndex(state);
  if (index !== null) {
    return getPlaylistTracksByIndex(state)[index];
  }
  return undefined;
};

export const getCurrentTrackSource = (state) => {
  const track = getCurrentTrack(state);
  const gateway = getIpfsGateway(state);
  return `${gateway}/ipfs/${track.audio}`;
};

export const isPlayerActive = state => getCurrentTrackIndex(state) !== null;

export const isShareCandidatesRecieved = state => getShareCandidates(state).length > 0;

export const getPlaylistTracksIndexes = createSelector(
  getPlaylistTracksByIndex,
  tracks => Object.keys(tracks),
);

export const getPlaylistTracksCount = state => getPlaylistTracksIndexes(state).length;

export const getPlaylistTracksCIDs = createSelector(
  getPlaylistTracksByIndex,
  tracks => Object.values(tracks).map(({ audio }) => audio),
);

export const getPlaylistUncachedTracksCIDs = createSelector(
  [getPlaylistTracksCIDs, getCachedCIDs],
  (tracksCIDs, cachedCIDs) => tracksCIDs.filter(cid => !cachedCIDs[cid]),
);

export const isPlaylistEmpty = state => getPlaylistTracksCount(state) === 0;

export const getShareFormValue = state => getShareCandidates(state)[0];

export const getShareCoverSrc = createSelector(
  [getShareCandidates, getIpfsApiEndpoint],
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

export const getNotificationsIds = createSelector(
  getNotifications,
  Object.keys,
);
export const getNotificationsLength = state => getNotificationsIds(state).length;

// DISCOVER PAGE

export const isDiscoverHasAlbums = state => (
  getDiscoverFeedAlbums(state) !== null
  && getDiscoverFeedAlbums(state).length > 0
);
export const isDiscoverSearchPerformed = state => !!getDiscoverSearchValue(state);
export const getDiscoverSelectedCount = state => getDiscoverSelectedIds(state).length;
export const isDiscoverSelected = state => getDiscoverSelectedCount(state) !== 0;
export const getDiscoverAlbumsIds = state => Array.from(getDiscoverFeedAlbums(state).keys());
export const getDiscoverSelectedCids = createSelector(
  [getDiscoverSelectedIds, getDiscoverFeedAlbums],
  (selectedIds, albums) => selectedIds.map(id => albums[id].albumCid),
);
