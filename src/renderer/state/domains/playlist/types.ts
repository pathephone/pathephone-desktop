
export interface IPlaylistTrack {
  audio: string;
  title: string;
  artist: string;
}

export interface IPlaylistTracksByIndex {
  [x: string]: IPlaylistTrack;
}

export interface IPlaylistRemovedByIndex {
  [x: string]: boolean;
}

export interface IPlaylistState {
  tracksByIndex: IPlaylistTracksByIndex;
  tracksLength: null | number;
  removedByIndex: IPlaylistRemovedByIndex;
  removedLength: number | null;
  currentTrackIndex: string | null;
  lastTrackIndex: string | null;
  shuffleOrder: string[] | null;
  isRepeat: boolean;
  isShuffle: boolean;
}
