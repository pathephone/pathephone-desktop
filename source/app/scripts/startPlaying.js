import playlistState, { state as playlistData } from '~/state/playlist'

const startPlaying = () => {
  const { id } = playlistData[0]
  playlistState('SET_CURRENT', id)
}

export default startPlaying
