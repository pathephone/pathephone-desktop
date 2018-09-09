import { IPlayerState } from '~renderer/ui/Player/types';

export const initialPlayerState: IPlayerState = {
  isPaused: false,
  isRepeat: false,
  isShuffle: false,
  volume: 0.7
};
