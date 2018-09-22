import { IPlaylistState } from '~renderer/ui/Playlist/types';

const calcForShuffle: (s: IPlaylistState) => string | null = ({
  currentTrackIndex,
  shuffleOrder,
  removedByIndex,
  isRepeat
}: IPlaylistState): string | null => {
  if (!currentTrackIndex || !shuffleOrder) {
    throw new Error('Not all required params are present.');
  }
  let nextIndex: string | null = currentTrackIndex;
  let shuffleIndex: number = shuffleOrder.indexOf(currentTrackIndex);
  const lastShuffleIndex: number = shuffleOrder.length - 1;
  do {
    if (shuffleIndex < lastShuffleIndex) {
      shuffleIndex += 1;
      nextIndex = shuffleOrder[shuffleIndex];
    } else
    if (isRepeat) {
      [nextIndex] = shuffleOrder;
    } else {
      nextIndex = null;
    }
  } while (nextIndex !== null && removedByIndex[nextIndex] === true);
  if (nextIndex === null) {
    return nextIndex;
  }

  return nextIndex;
};

const calcForDefault: (state: IPlaylistState) => string | null = ({
  tracksLength,
  currentTrackIndex,
  removedByIndex,
  isRepeat
}: IPlaylistState): string | null => {
  if (!currentTrackIndex || !tracksLength) {
    throw new Error('Not all required params are present.');
  }
  let nextIndex: number | null = Number(currentTrackIndex);
  const lastTrackIndex: number = tracksLength - 1;
  do {
    if (nextIndex < lastTrackIndex) {
      nextIndex += 1;
    } else
    if (isRepeat) {
      nextIndex = 0;
    } else {
      nextIndex = null;
    }
  } while (nextIndex !== null && removedByIndex[nextIndex] === true);
  if (nextIndex === null) {
    return `${nextIndex}`;
  }

  return `${nextIndex}`;
};

export const calcNextTrackIndex: (state: IPlaylistState) => string | null = (
  (state: IPlaylistState): string | null => {
    const {
      isShuffle,
      tracksLength,
      removedLength
    } = state;
    if (removedLength && removedLength + 1 === tracksLength) {
      return null;
    }
    if (isShuffle) {
      return calcForShuffle(state);
    }

    return calcForDefault(state);
  }
);
