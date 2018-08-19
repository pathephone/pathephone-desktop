import actions from '#actions';

const DOMAIN = 'localAudiosCIDs';

const initialState = {};

export const getLocalAudiosCIDs = state => state[DOMAIN];

const handleReduceTracks = (acc, track) => {
  acc[track.audio] = false;
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
    case actions.systemPlayedTracksRecieved.toString():
      return payload.reduce(handleReduceTracks, {});
    case actions.systemQueuedTracksRecieved.toString(): {
      const newCids = payload.reduce(handleReduceTracks, {});
      return {
        ...newCids,
        ...state,
      };
    }
    case actions.uiPlaylistCleared.toString():
      return {};
    default:
      return state;
  }
};

export default reducer;
