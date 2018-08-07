import {
  systemDiscoverAlbumsFetch,
  systemDiscoverAlbumsFetchSucceed,
  systemDiscoverAlbumsFetchFailed,
  systemShareCandidateSaveSucceed,
  systemAlbumsRecievedCacheTransited,
} from '~actions/system';

import {
  uiDiscoverSearchPerformed,
  uiDiscoverSearchCleared,
  uiDiscoverPageClosed,
} from '~actions/ui';

const DOMAIN = 'discoverPage';

const initialState = {
  albums: null,
  searchValue: '',
  isFailed: false,
  isProcessing: false,
  isAlbumsOutdated: false,
};

// SELECTORS

export const getDiscoverFeedAlbums = state => state[DOMAIN].albums;
export const getDiscoverSearchValue = state => state[DOMAIN].searchValue;
export const isDiscoverHasFailed = state => state[DOMAIN].isFailed;
export const isDiscoverPageProcessing = state => state[DOMAIN].isProcessing;
export const isDiscoverAlbumsOutdated = state => state[DOMAIN].isAlbumsOutdated;

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case systemDiscoverAlbumsFetch.toString():
      return { ...initialState, isProcessing: true };
    case uiDiscoverPageClosed.toString():
      return { ...initialState };
    case uiDiscoverSearchPerformed.toString():
      return {
        ...initialState,
        searchValue: payload,
        isProcessing: true,
      };
    case uiDiscoverSearchCleared.toString():
      return { ...initialState, isProcessing: true };
    case systemDiscoverAlbumsFetchSucceed.toString():
      return {
        ...state,
        albums: payload,
        isProcessing: false,
        isAlbumsOutdated: false,
      };
    case systemShareCandidateSaveSucceed.toString():
      if (state.albums) {
        return {
          ...state,
          isAlbumsOutdated: true,
        };
      }
      return state;
    case systemAlbumsRecievedCacheTransited.toString():
      const { latestCid } = payload;
      if (state.albums && state.albums[0].albumCid !== latestCid) {
        return {
          ...state,
          isAlbumsOutdated: true,
        };
      }
      return state;
    case systemDiscoverAlbumsFetchFailed.toString():
      return { ...state, isFailed: true, isProcessing: false };
    default:
      return state;
  }
};

export default reducer;
