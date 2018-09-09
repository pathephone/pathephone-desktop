import { AnyAction, Reducer } from 'redux';

import { playerEvents } from '~renderer/ui/Player';
import { initialPlayerState } from '~renderer/ui/Player/state/initial';
import { IPlayerState } from '~renderer/ui/Player/types';

export const playerReducer: Reducer<IPlayerState> = (
  state: IPlayerState = initialPlayerState,
  action: AnyAction
) : IPlayerState => {
  const { type, payload } = action;
  switch (type) {
    case playerEvents.volumeChanged.toString():
      return { ...state, volume: payload };
    case playerEvents.playbackToggled.toString():
      return { ...state, isPaused: !state.isPaused };
    case playerEvents.shuffleToggled.toString():
      return { ...state, isShuffle: !state.isShuffle };
    case playerEvents.repeatToggled.toString():
      return { ...state, isRepeat: !state.isRepeat };
    default:
      return state;
  }
};
