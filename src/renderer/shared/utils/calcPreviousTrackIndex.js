
const calcForShuffle = ({ currentTrackIndex, shuffleOrder, removedByIndex }) => {
  let previousIndex = currentTrackIndex
  let shuffleIndex = shuffleOrder.indexOf(currentTrackIndex)
  do {
    previousIndex = shuffleOrder[shuffleIndex--]
  } while (shuffleIndex > 0 && removedByIndex[previousIndex] === true)
  return previousIndex + ''
}

const calcForDefault = ({ currentTrackIndex, removedByIndex }) => {
  let previousIndex = currentTrackIndex
  do {
    previousIndex--
  } while (previousIndex > 0 && removedByIndex[previousIndex] === true)
  return previousIndex + ''
}

const calcPreviousTrackIndex = state => {
  const {
    shuffleOrder
  } = state
  if (shuffleOrder) {
    return calcForShuffle(state)
  } else {
    return calcForDefault(state)
  }
}

export default calcPreviousTrackIndex
