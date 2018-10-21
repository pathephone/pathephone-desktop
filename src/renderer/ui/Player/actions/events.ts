import { createStandardAction } from 'typesafe-actions';

const playerDomain = (action: string): string => `@player/${action}`;

export const uiPlaylistTrackPlayed = createStandardAction(
  playerDomain('PLAYLIST_TRACK_PLAYED')
)();
export const uiPlaylistTrackRemoved = createStandardAction(
  playerDomain('PLAYLIST_TRACK_REMOVED')
)();
export const uiPlaylistCleared = createStandardAction(
  playerDomain('PLAYLIST_CLEARED')
)();

export const uiRepeatToggled = createStandardAction(
  playerDomain('REPEAT_TOGGLED')
)();
export const uiShuffleToggled = createStandardAction(
  playerDomain('SHUFFLE_TOGGLED')
)();

export const uiPlaybackPaused = createStandardAction(
  playerDomain('PLAYBACK_PAUSED')
)();
export const uiPlaybackResumed = createStandardAction(
  playerDomain('PLAYBACK_RESUMED')
)();
export const uiPlaybackToggled = createStandardAction(
  playerDomain('PLAYBACK_TOGGLED')
)();

export const uiNextTrackPlayed = createStandardAction(
  playerDomain('NEXT_TRACK_PLAYED')
)();
export const uiPreviousTrackPlayed = createStandardAction(
  playerDomain('PREVIOUS_TRACK_PLAYED')
)();

export const uiVolumeChanged = createStandardAction(
  playerDomain('VOLUME_CHANGED')
)();

export const systemAudioEnded = createStandardAction(
  playerDomain('AUDIO_PLAYBACK_ENDED')
)();