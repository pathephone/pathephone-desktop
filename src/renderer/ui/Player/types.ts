
interface ITrack {
  audioSrc: string;
  title: string;
  artist: string;
}

export interface IPlayerState {
  volume: number;
  isPaused: boolean;
  isShuffle: boolean;
  isRepeat: boolean;
  track?: ITrack;
}
