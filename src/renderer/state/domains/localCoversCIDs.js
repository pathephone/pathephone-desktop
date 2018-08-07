import {
  systemIPFSFileCached, systemDiscoverAlbumsFetchSucceed,
} from '~actions/system';
import {
  uiDiscoverPageClosed,
} from '~actions/ui';

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
    case systemIPFSFileCached.toString():
      if (state[payload] === false) {
        return { ...state, [payload]: true };
      }
      return state;
    case systemDiscoverAlbumsFetchSucceed.toString():
      return payload.reduce(handleReduce, {});
    case uiDiscoverPageClosed.toString():
      return {};
    default:
      return state;
  }
};

export default reducer;
