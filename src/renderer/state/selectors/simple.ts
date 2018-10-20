import { Selector } from 'reselect';
import { ICachedCIDsState } from '~renderer/state/domains/cachedCIDs';
import { IDiscoverSelectedState } from '~renderer/state/domains/discoverSelected';
import { INewReleaseState } from '~renderer/state/domains/newRelease';
import { IRootState } from '~renderer/state/rootState';
import { IGithubRelease, IIpfsBandwidthStat, IIpfsRepoStat } from '~renderer/types/api';
import { IDiscoverPageAlbum } from '~renderer/ui/DiscoverPage/types';
import { IMetabinAlbum } from '~shared/types/domains/album';

// albums info

export const getAlbumsCount: (s: IRootState) => number | null = (
  state: IRootState
): number | null => state.albumsInfo.albumsCount;

export const getAlbumsCountStrict: (s: IRootState) => number = (
  state: IRootState
 ): number => {
   const count: number | null = getAlbumsCount(state);
   if (count) {
     return count;
   }
   throw new Error('Selector used to early.');
 };

// audio reducer

export const isPaused: (s: IRootState) => boolean = (
  state: IRootState
): boolean => state.audio.isPaused;

// cached cids

export const getCachedCIDs: (s: IRootState) => ICachedCIDsState = (
  (state: IRootState): ICachedCIDsState => state.cachedCIDs
);

// discover feed selectors

export const getDiscoverFeedAlbums: Selector<IRootState, IDiscoverPageAlbum[] | null> = (
  state: IRootState
): IDiscoverPageAlbum[] | null => state.discoverPage.albums;
export const getDiscoverFeedAlbumsStrict: Selector<IRootState, IDiscoverPageAlbum[]> = (
  state: IRootState
): IDiscoverPageAlbum[] => {
  const albums: IDiscoverPageAlbum[] | null = getDiscoverFeedAlbums(state);
  if (albums) {
    return albums;
  }
  throw new Error('Selector used too early.');
};
export const getDiscoverSearchValue: Selector<IRootState, string> = (
  state: IRootState
): string => state.discoverPage.searchValue;
export const isDiscoverHasFailed: Selector<IRootState, boolean> = (
  state: IRootState
): boolean => state.discoverPage.isFailed;
export const isDiscoverPageProcessing: Selector<IRootState, boolean> = (
  state: IRootState
): boolean => state.discoverPage.isProcessing;
export const isDiscoverAlbumsOutdated: Selector<IRootState, boolean> = (
  state: IRootState
): boolean => state.discoverPage.isAlbumsOutdated;

// discover selected

export const getDiscoverSelectedIds: Selector<IRootState, IDiscoverSelectedState> = (
  state: IRootState
): IDiscoverSelectedState => state.discoverSelected;

// ipfs info

export const getIpfsIsOffline: Selector<IRootState, boolean> = (
  state: IRootState
): boolean => state.ipfsInfo.isOffline;
export const getIpfsGateway: Selector<IRootState, null | string> = (
  state: IRootState
): null | string => state.ipfsInfo.gateway;
export const getIpfsApiEndpoint: Selector<IRootState, null | string> = (
  state: IRootState
): null | string => state.ipfsInfo.apiEndpoint;
export const getIpfsApiEndpointStrict: Selector<IRootState, string> = (
  state: IRootState
): string => {
  const endpoint: string | null = getIpfsApiEndpoint(state);
  if (endpoint) {
    return endpoint;
  }
  throw new Error('Selector used too early.');
};
export const getIpfsPeers: Selector<IRootState, null | number> = (
  state: IRootState
): null | number => state.ipfsInfo.peersCount;
export const getMetabinPeers: Selector<IRootState, null | number> = (
  state: IRootState
): null | number => state.ipfsInfo.metabinPeersCount;
export const getIPFSRepoStat: Selector<IRootState, null | IIpfsRepoStat> = (
  state: IRootState
): null | IIpfsRepoStat => state.ipfsInfo.repoStat;
export const getIPFSBandwidthStat: Selector<IRootState, null | IIpfsBandwidthStat> = (
  state: IRootState
): IIpfsBandwidthStat | null => state.ipfsInfo.bandwidthStat;

// legal agreement

export const isLegalAgreementGranted: Selector<IRootState, boolean> = (
  state: IRootState
): boolean => state.legalAgreement;

// new release

export const hasNewRelease: Selector<IRootState, boolean> = (
  state: IRootState
): boolean => !!state.newRelease;

export const getNewRelease: Selector<IRootState, INewReleaseState> = (
  state: IRootState
): INewReleaseState => state.newRelease;

export const getNewReleaseStrict: Selector<IRootState, IGithubRelease> = (
  state: IRootState
): IGithubRelease => {
  if (state.newRelease) {
    return state.newRelease;
  }
  throw new Error('Selector used to early.');
};

// share

export const getShareCandidates: Selector<IRootState, IMetabinAlbum[]> = (
  state: IRootState
): IMetabinAlbum[] => state.share.candidates;
export const isShareProcessing: Selector<IRootState, boolean> = (
  state: IRootState
): boolean => state.share.isProcessing;

// volume

export const getVolume: Selector<IRootState, number> = (
  state: IRootState
): number => state.volume;
