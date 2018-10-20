import { AnyAction, Reducer } from 'redux';

import { actions } from '~renderer/state/actions';

export interface IAudioState {
  isPaused: boolean;
}

const initialState: IAudioState = {
  isPaused: true
};

export const audioReducer: Reducer<IAudioState> = (
  state: IAudioState = initialState, action: AnyAction
): IAudioState => {
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
