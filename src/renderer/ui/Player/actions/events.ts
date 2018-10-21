import { uiAction, systemAction } from '~renderer/utils/actions';

const playerDomain = (action: string): string => `@player/${action}`;

export const uiPlaylistTrackPlayed = uiAction(
  playerDomain('PLAYLIST_TRACK_PLAYED')
);
export const uiPlaylistTrackRemoved = uiAction(
  playerDomain('PLAYLIST_TRACK_REMOVED')
);
export const uiPlaylistCleared = uiAction(
  playerDomain('PLAYLIST_CLEARED')
);

export const uiRepeatToggled = uiAction(
  playerDomain('REPEAT_TOGGLED')
);
export const uiShuffleToggled = uiAction(
  playerDomain('SHUFFLE_TOGGLED')
);

export const uiPlaybackPaused = uiAction(
  playerDomain('PLAYBACK_PAUSED')
);
export const uiPlaybackResumed = uiAction(
  playerDomain('PLAYBACK_RESUMED')
);
export const uiPlaybackToggled = uiAction(
  playerDomain('PLAYBACK_TOGGLED')
);

export const uiNextTrackPlayed = uiAction(
  playerDomain('NEXT_TRACK_PLAYED')
);
export const uiPreviousTrackPlayed = uiAction(
  playerDomain('PREVIOUS_TRACK_PLAYED')
);

export const uiVolumeChanged = uiAction(
  playerDomain('VOLUME_CHANGED')
);

export const systemAudioEnded = systemAction(
  playerDomain('AUDIO_PLAYBACK_ENDED')
);