import { IRootState } from '~renderer/state/rootState';
import { IPlaylistTracksByIndex, IPlaylistRemovedByIndex } from '~renderer/state/domains/playlist/types';

export const getPlaylistTracksByIndex: (s: IRootState) => IPlaylistTracksByIndex = (
  (state: IRootState): IPlaylistTracksByIndex => state.playlist.tracksByIndex
);
export const getPlaylistRemovedByIndex: (s: IRootState) => IPlaylistRemovedByIndex = (
  (state: IRootState): IPlaylistRemovedByIndex => state.playlist.removedByIndex
);
export const getCurrentTrackIndex: (s: IRootState) => string | null = (
  (state: IRootState): string | null => state.playlist.currentTrackIndex
);
export const isShuffleTurnedOn: (s: IRootState) => boolean = (
  (state: IRootState): boolean => !!state.playlist.isShuffle
);
export const isRepeatTurnedOn: (s: IRootState) => boolean = (
  (state: IRootState): boolean => state.playlist.isRepeat
);
