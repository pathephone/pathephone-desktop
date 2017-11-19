import playlistState from 'state/playlist'

const stopPlaying = () => {
  playlistState('DROP_CURRENT')
}

export default stopPlaying
