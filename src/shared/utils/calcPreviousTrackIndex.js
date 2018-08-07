
const calcForShuffle = ({
  currentTrackIndex, shuffleOrder, removedByIndex, isRepeat,
}) => {
  let shuffleIndex = shuffleOrder.indexOf(currentTrackIndex);
  let previousIndex = currentTrackIndex;
  do {
    if (--shuffleIndex < 0) {
      if (isRepeat) {
        shuffleIndex = shuffleOrder.length - 1;
      } else {
        break;
      }
    }
    previousIndex = shuffleOrder[shuffleIndex];
  } while (removedByIndex[previousIndex] === true);
  console.log(previousIndex);
  return `${previousIndex}`;
};

const calcForDefault = ({
  currentTrackIndex, tracksLength, removedByIndex, isRepeat,
}) => {
  let previousIndex = currentTrackIndex;
  do {
    if (previousIndex - 1 < 0) {
      if (isRepeat) {
        previousIndex = tracksLength - 1;
      } else {
        break;
      }
    } else {
      --previousIndex;
    }
  } while (removedByIndex[previousIndex] === true);
  return `${previousIndex}`;
};

const calcPreviousTrackIndex = (state) => {
  const {
    isShuffle,
  } = state;
  if (isShuffle) {
    return calcForShuffle(state);
  }
  return calcForDefault(state);
};

export default calcPreviousTrackIndex;
