import playlistState from '~/state/playlist'

const setCurrentTrack = (id) => {
  playlistState('SET_CURRENT', id)
}

export default setCurrentTrack
