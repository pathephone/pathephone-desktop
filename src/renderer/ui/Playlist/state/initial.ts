import { IPlaylistState } from '~renderer/ui/Playlist/types';

export const initialPlaylistState : IPlaylistState = {
  tracksByIndex: {},
  tracksLength: null,
  removedByIndex: {},
  removedLength: null,
  currentTrackIndex: null,
  lastTrackIndex: null,
  shuffleOrder: null,
  isRepeat: false,
  isShuffle: false
};
