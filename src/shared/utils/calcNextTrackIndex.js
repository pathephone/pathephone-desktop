const calcForShuffle = ({
  currentTrackIndex,
  shuffleOrder,
  removedByIndex,
  isRepeat
}) => {
  let nextIndex = currentTrackIndex
  let shuffleIndex = shuffleOrder.indexOf(currentTrackIndex)
  const lastShuffleIndex = shuffleOrder.length - 1
  do {
    if (shuffleIndex < lastShuffleIndex) {
      shuffleIndex++
      nextIndex = shuffleOrder[shuffleIndex]
    } else
    if (isRepeat) {
      nextIndex = shuffleOrder[0]
    } else {
      nextIndex = null
    }
  } while (nextIndex !== null && removedByIndex[nextIndex] === true)
  if (nextIndex === null) return nextIndex
  return nextIndex + ''
}

const calcForDefault = ({
  tracksByIndex,
  tracksLength,
  currentTrackIndex,
  removedByIndex,
  isRepeat
}) => {
  let nextIndex = currentTrackIndex
  const lastTrackIndex = tracksLength - 1
  do {
    if (nextIndex < lastTrackIndex) {
      nextIndex++
    } else
    if (isRepeat) {
      nextIndex = 0
    } else {
      nextIndex = null
    }
  } while (nextIndex !== null && removedByIndex[nextIndex] === true)
  if (nextIndex === null) return nextIndex
  return nextIndex + ''
}

const calcNextTrackIndex = state => {
  const {
    isShuffle,
    tracksLength,
    removedLength
  } = state
  if (removedLength + 1 === tracksLength) return null
  if (isShuffle) {
    return calcForShuffle(state)
  } else {
    return calcForDefault(state)
  }
}

export default calcNextTrackIndex
