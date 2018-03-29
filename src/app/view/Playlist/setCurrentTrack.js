import playlistState from '~app/state/playlist'

const setCurrentTrack = (id) => {
  playlistState('SET_CURRENT', id)
}

export default setCurrentTrack
