import actions from '#actions';

const DOMAIN = 'audio';

const initialState = {
  isPaused: true,
};

export const isPaused = state => state[DOMAIN].isPaused;

const reducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case actions.uiPlaybackToggled.toString():
      return { ...state, isPaused: !state.isPaused };
    case actions.uiDiscoverSelectedPlayed.toString():
    case actions.uiAlbumPlayed.toString():
    case actions.uiPlaylistTrackPlayed.toString():
      return { ...state, isPaused: false };
    default:
      return state;
  }
};

export default reducer;
