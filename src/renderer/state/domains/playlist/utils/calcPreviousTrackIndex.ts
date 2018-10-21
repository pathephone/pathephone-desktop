import { IPlaylistState } from "~renderer/state/domains/playlist/types";

const calcForShuffle: (p: IPlaylistState) => string = ({
  currentTrackIndex, shuffleOrder, removedByIndex, isRepeat
}: IPlaylistState): string => {
  if (!currentTrackIndex || !shuffleOrder) {
    throw new Error('Not all required params are present.');
  }
  let shuffleIndex: number = shuffleOrder.indexOf(currentTrackIndex);
  let previousIndex: string = currentTrackIndex;
  do {
    shuffleIndex -= 1;
    if (shuffleIndex < 0) {
      if (isRepeat) {
        shuffleIndex = shuffleOrder.length - 1;
      } else {
        break;
      }
    }
    previousIndex = shuffleOrder[shuffleIndex];
  } while (removedByIndex[previousIndex] === true);

  return `${previousIndex}`;
};

const calcForDefault: (p: IPlaylistState) => string = ({
  currentTrackIndex, tracksLength, removedByIndex, isRepeat
}: IPlaylistState): string => {
  if (!currentTrackIndex || !tracksLength) {
    throw new Error('Not all required params are present.');
  }
  let previousIndex: number = Number(currentTrackIndex);
  do {
    if (previousIndex - 1 < 0) {
      if (isRepeat) {
        previousIndex = tracksLength - 1;
      } else {
        break;
      }
    } else {
      previousIndex -= 1;
    }
  } while (removedByIndex[previousIndex] === true);

  return `${previousIndex}`;
};

export const calcPreviousTrackIndex: (state: IPlaylistState) => string = (
  (state: IPlaylistState): string => {
    if (state.isShuffle) {

      return calcForShuffle(state);
    }

    return calcForDefault(state);
  }
);
