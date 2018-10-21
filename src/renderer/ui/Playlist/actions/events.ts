import { createStandardAction } from 'typesafe-actions';

const playlistDomain = (action: string): string => `@playlist/${action}`;

export const uiPlaylistTrackPlayed = createStandardAction(
  playlistDomain('PLAYLIST_TRACK_PLAYED')
)<string>();
export const uiPlaylistTrackRemoved = createStandardAction(
  playlistDomain('PLAYLIST_TRACK_REMOVED')
)<string>();
export const uiPlaylistCleared = createStandardAction(
  playlistDomain('PLAYLIST_CLEARED')
)();
