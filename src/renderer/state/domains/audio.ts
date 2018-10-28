import { AnyAction, Reducer } from 'redux';
import { getType } from 'typesafe-actions';

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
    case getType(actions.uiPlaybackToggled):
      return { ...state, isPaused: !state.isPaused };
    case getType(actions.uiDiscoverSelectedPlayed):
    case getType(actions.uiAlbumPlayed):
    case getType(actions.uiPlaylistTrackPlayed):
      return { ...state, isPaused: false };
    default:
      return state;
  }
};
