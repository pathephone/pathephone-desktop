import playlistState, { state as playlistData } from '../state/playlist'

const playPrevTrack = () => {
  const currentIndex = playlistData.findIndex(
    ({ current }) => current
  )
  const nextCurrent = playlistData[currentIndex - 1]
  if (nextCurrent) {
    const { id } = nextCurrent
    playlistState('SET_CURRENT', id)
  } else {
    playlistState('SET_CURRENT', playlistData[currentIndex].id)
  }
}

export default playPrevTrack
