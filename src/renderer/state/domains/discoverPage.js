import actions from '#actions';

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
    case actions.systemDiscoverAlbumsFetch.toString():
      return { ...initialState, isProcessing: true };
    case actions.uiDiscoverPageClosed.toString():
      return { ...initialState };
    case actions.uiDiscoverSearchPerformed.toString():
      return {
        ...initialState,
        searchValue: payload,
        isProcessing: true,
      };
    case actions.uiDiscoverSearchCleared.toString():
      return { ...initialState, isProcessing: true };
    case actions.systemDiscoverAlbumsFetchSucceed.toString():
      return {
        ...state,
        albums: payload,
        isProcessing: false,
        isAlbumsOutdated: false,
      };
    case actions.systemShareCandidateSaveSucceed.toString():
      if (state.albums) {
        return {
          ...state,
          isAlbumsOutdated: true,
        };
      }
      return state;
    case actions.systemAlbumsRecievedCacheTransited.toString(): {
      const { latestCid } = payload;
      if (state.albums && state.albums[0].albumCid !== latestCid) {
        return {
          ...state,
          isAlbumsOutdated: true,
        };
      }
      return state;
    }
    case actions.systemDiscoverAlbumsFetchFailed.toString():
      return { ...state, isFailed: true, isProcessing: false };
    default:
      return state;
  }
};

export default reducer;
