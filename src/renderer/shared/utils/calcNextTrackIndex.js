
const calcNextTrackIndex = state => {
  let index = state.currentTrackIndex
  do {
    if (index < state.lastTrackIndex) {
      index++
    } else {
      index = null
    }
  } while (index !== null && state.removedByIndex[index] === true)
  return index
}

export default calcNextTrackIndex
