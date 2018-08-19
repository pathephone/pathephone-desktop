import actions from '#actions';

const DOMAIN = 'localCoversCIDs';

const initialState = {};

export const getLocalCoversCIDs = state => state[DOMAIN];

const handleReduce = (acc, album) => {
  acc[album.albumCoverCid] = false;
  return acc;
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.systemIPFSFileCached.toString():
      if (state[payload] === false) {
        return { ...state, [payload]: true };
      }
      return state;
    case actions.systemDiscoverAlbumsFetchSucceed.toString():
      return payload.reduce(handleReduce, {});
    case actions.uiDiscoverPageClosed.toString():
      return {};
    default:
      return state;
  }
};

export default reducer;
