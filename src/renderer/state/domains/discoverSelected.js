import actions from '#actions';

const DOMAIN = 'discoverSelected';

const initialState = [];

// SELECTORS

export const getDiscoverSelectedIds = state => state[DOMAIN];

// ACTIONS

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.uiDiscoverAlbumSelected.toString():
      return [...state, payload];
    case actions.uiDiscoverAlbumDeselected.toString():
      return state.filter(cid => cid !== payload);
    case actions.systemDiscoverSelectedActionSucceed.toString():
    case actions.uiDiscoverSelectedCanceled.toString():
      return [];
    default:
      return state;
  }
};

export default reducer;
