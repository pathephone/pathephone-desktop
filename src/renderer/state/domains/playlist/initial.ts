import { IPlaylistState } from "~renderer/state/domains/playlist/types";

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
