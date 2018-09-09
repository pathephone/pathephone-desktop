import { IActionCreator, systemAction, uiAction } from '~renderer/utils/actions';

const playerDomain: (s: string) => string = (action: string): string => `@player/${action}`;

export const playbackToggled: IActionCreator<void> = uiAction(
  playerDomain('PLAYBACK_TOGGLED')
);

export const resumed: IActionCreator<void> = systemAction(
  playerDomain('RESUMED')
);

export const shuffleToggled: IActionCreator<void> = systemAction(
  playerDomain('SHUFFLE_TOGGLED')
);

export const repeatToggled: IActionCreator<void> = systemAction(
  playerDomain('REPEAT_TOGGLED')
);

export const volumeChanged: IActionCreator<number> = systemAction(
  playerDomain('VOLUME_CHANGED')
);

export const trackEnded: IActionCreator<void> = systemAction(
  playerDomain('TRACK_ENDED')
);

export const nextTrackPlayed: IActionCreator<void> = systemAction(
  playerDomain('NEXT_TRACK_PLAYED')
);

export const previousTrackPlayed: IActionCreator<void> = systemAction(
  playerDomain('PREVIOUS_TRACK_PLAYED')
);
