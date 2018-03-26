
import playlistState from '../../state/playlist'
import playerState from '../../state/player'

const clearPlaylist = () => {
  playlistState('CLEAR')
  playerState('PAUSE')
}

export default clearPlaylist
