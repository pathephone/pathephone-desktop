
import {
  systemIPFSFileCached,
} from '~actions/system';

const DOMAIN = 'cachedCIDs';

const initialState = {};

export const getCachedCIDs = state => state[DOMAIN];

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case systemIPFSFileCached.toString():
      return {
        ...state,
        [payload]: true,
      };
    default:
      return state;
  }
};

export default reducer;
