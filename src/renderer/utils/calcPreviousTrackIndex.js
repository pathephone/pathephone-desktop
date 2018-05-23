
const calcPreviousTrackIndex = state => {
  let index = state.currentTrackIndex
  do {
    if (index > 0) {
      index--
    }
  } while (index > 0 && state.removedByIndex[index] === true)
  return index
}

export default calcPreviousTrackIndex
