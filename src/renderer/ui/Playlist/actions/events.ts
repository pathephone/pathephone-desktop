import { uiAction } from '~renderer/utils/actions';

const playlistDomain = (action: string): string => `@playlist/${action}`;

export const uiPlaylistTrackPlayed = uiAction<string>(
  playlistDomain('PLAYLIST_TRACK_PLAYED')
);
export const uiPlaylistTrackRemoved = uiAction<string>(
  playlistDomain('PLAYLIST_TRACK_REMOVED')
);
export const uiPlaylistCleared = uiAction(
  playlistDomain('PLAYLIST_CLEARED')
);
