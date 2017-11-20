import playlistState, { state as playlistData } from '../state/playlist'

const playNextTrack = () => {
  const currentIndex = playlistData.findIndex(
    ({ current }) => current
  )
  const nextCurrent = playlistData[currentIndex + 1]
  if (nextCurrent) {
    const { id } = nextCurrent
    playlistState('SET_CURRENT', id)
  } else {
    playlistState('DROP_CURRENT')
  }
}

export default playNextTrack
