import { systemDiscoverSelectedActionSucceed } from '~actions/system';
import {
  uiDiscoverAlbumSelected,
  uiDiscoverAlbumDeselected,
  uiDiscoverSelectedCanceled,
} from '~actions/ui';

const DOMAIN = 'discoverSelected';

const initialState = [];

// SELECTORS

export const getDiscoverSelectedIds = state => state[DOMAIN];

// ACTIONS

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case uiDiscoverAlbumSelected.toString():
      return [...state, payload];
    case uiDiscoverAlbumDeselected.toString():
      return state.filter(cid => cid !== payload);
    case systemDiscoverSelectedActionSucceed.toString():
    case uiDiscoverSelectedCanceled.toString():
      return [];
    default:
      return state;
  }
};

export default reducer;
