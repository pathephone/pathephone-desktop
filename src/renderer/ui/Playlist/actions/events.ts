import { IActionCreator, uiAction } from '~renderer/utils/actions';

const playlistDomain: (s: string) => string = (action: string): string => `@playlist/${action}`;

export const uiPlaylistTrackPlayed: IActionCreator<string> = uiAction<string>(
  playlistDomain('PLAYLIST_TRACK_PLAYED')
);
export const uiPlaylistTrackRemoved: IActionCreator<string> = uiAction<string>(
  playlistDomain('PLAYLIST_TRACK_REMOVED')
);
export const uiPlaylistCleared: IActionCreator<void> = uiAction(
  playlistDomain('PLAYLIST_CLEARED')
);
