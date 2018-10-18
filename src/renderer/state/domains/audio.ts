import { AnyAction, Reducer } from 'redux';

import { actions } from '~renderer/state/actions';
import { IRootState } from '~renderer/state/rootState';

interface IAudioState {
  isPaused: boolean;
}

const DOMAIN: string = 'audio';

const initialState: IAudioState = {
  isPaused: true
};

export const isPaused: (s: IRootState) => boolean = (
  state: IRootState
): boolean => state[DOMAIN].isPaused;

const reducer: Reducer<IAudioState> = (
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

export default reducer;
