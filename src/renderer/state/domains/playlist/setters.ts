import { IPlaylistState, IPlaylistTrack } from '~renderer/state/domains/playlist/types';
import { initialPlaylistState } from '~renderer/state/domains/playlist/initial';
import { toTracksByIndex } from '~renderer/state/domains/playlist/utils/toShuffleOrder';
import { toShuffleOrder } from '~renderer/state/domains/playlist/utils/toTracksByIndex';
import { calcNextTrackIndex } from '~renderer/state/domains/playlist/utils/calcNextTrackIndex';
import { calcPreviousTrackIndex } from '~renderer/state/domains/playlist/utils/calcPreviousTrackIndex';

type ISetter<TPayload = void> = (s: IPlaylistState, p?: TPayload) => IPlaylistState;

// setters

export const replaceTracks: ISetter<IPlaylistTrack[]> = (
  (state: IPlaylistState, payload: IPlaylistTrack[]): IPlaylistState => {
    const tracksByIndex: {
      [x: string]: IPlaylistTrack;
    } = toTracksByIndex(payload);
    const tracksLength: number = Object.keys(tracksByIndex).length;
    let shuffleOrder: string[] | null = null;
    let currentTrackIndex: string = '0';
    if (state.isShuffle) {
      shuffleOrder = toShuffleOrder(tracksByIndex, currentTrackIndex);
      [currentTrackIndex] = shuffleOrder;
    }

    return {
      ...initialPlaylistState,
      tracksByIndex,
      tracksLength,
      shuffleOrder,
      currentTrackIndex,
      lastTrackIndex: `${payload.length - 1}`,
      isRepeat: state.isRepeat,
      isShuffle: state.isShuffle
    };
  }
);

export const addTracks: ISetter<IPlaylistTrack[]> = (
  (state: IPlaylistState, payload: IPlaylistTrack[]): IPlaylistState => {
    const tracksByIndex: {
      [x: string]: IPlaylistTrack;
    } = {
      ...state.tracksByIndex,
      ...toTracksByIndex(payload, state.lastTrackIndex)
    };
    const tracksLength: number = Object.keys(tracksByIndex).length;
    let shuffleOrder: string[] | null = null;
    if (state.isShuffle) {
      shuffleOrder = toShuffleOrder(tracksByIndex, state.currentTrackIndex);
    }

    return {
      ...state,
      tracksByIndex,
      tracksLength,
      shuffleOrder,
      lastTrackIndex: `${Number(state.lastTrackIndex) + payload.length - 1}`
    };
  }
);

export const playTrack: ISetter<string> = (
  (state: IPlaylistState, payload: string): IPlaylistState => {
    let shuffleOrder: string[] | null = null;
    if (state.isShuffle) {
      shuffleOrder = toShuffleOrder(state.tracksByIndex, payload);
    }

    return {
      ...state,
      currentTrackIndex: payload,
      shuffleOrder
    };
  }
);

export const playNextTrack: ISetter = (
  (state: IPlaylistState): IPlaylistState => {
    const newCurrentIndex: string | null = calcNextTrackIndex(state);

    return {
      ...state,
      currentTrackIndex: newCurrentIndex
    };
  }
);

export const playPreviousTrack: ISetter = (
  (state: IPlaylistState): IPlaylistState => {
    const newCurrentIndex: string = calcPreviousTrackIndex(state);

    return {
      ...state,
      currentTrackIndex: newCurrentIndex
    };
  }
);

export const removeTrack: ISetter<string> = (
  (state: IPlaylistState, payload: string): IPlaylistState => {
    let newCurrentIndex: string | null = state.currentTrackIndex;
    if (newCurrentIndex === payload) {
      newCurrentIndex = calcNextTrackIndex(state);
    }
    const removedByIndex: {
      [x: string]: boolean;
    } = {
      ...state.removedByIndex,
      [payload]: true
    };
    const removedLength: number = Object.keys(removedByIndex).length;

    return {
      ...state,
      removedByIndex,
      removedLength,
      currentTrackIndex: newCurrentIndex
    };
  }
);

export const toggleRepeat: ISetter = (
  (state: IPlaylistState): IPlaylistState => {
    return {
      ...state,
      isRepeat: !state.isRepeat
    };
  }
);

export const toggleShuffle: ISetter = (
  (state: IPlaylistState): IPlaylistState => {
    if (state.isShuffle) {
      return { ...state, shuffleOrder: null, isShuffle: false };
    }
    const shuffleOrder: string[] = toShuffleOrder(state.tracksByIndex, state.currentTrackIndex);

    return {
      ...state,
      shuffleOrder,
      isShuffle: true
    };
  }
);

export const clearPlaylist: ISetter = (
  (state: IPlaylistState) : IPlaylistState => {
    return {
      ...initialPlaylistState,
      isRepeat: state.isRepeat,
      isShuffle: state.isShuffle
    };
  }
);
