import playlistState from '../state/playlist'

const stopPlaying = () => {
  playlistState('UNSET_CURRENT')
}

export default stopPlaying
