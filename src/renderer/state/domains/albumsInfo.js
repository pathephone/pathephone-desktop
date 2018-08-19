import actions from '#actions';

const DOMAIN = 'albumsInfo';

const initialState = {
  albumsCount: null,
};

export const getAlbumsCount = state => state[DOMAIN].albumsCount;

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.systemAlbumsCollectionInfoRecieved.toString():
    case actions.systemShareCandidateSaveSucceed.toString():
    case actions.systemAlbumsRecievedCacheTransited.toString():
      return { albumsCount: payload.albumsCount };
    case actions.systemDiscoverSelectedActionSucceed.toString():
      if (payload) {
        return { albumsCount: payload.albumsCount };
      }
      return state;
    default:
      return state;
  }
};

export default reducer;
