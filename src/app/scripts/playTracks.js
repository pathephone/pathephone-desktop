import startPlaying from './startPlaying'
import playlistState from '../state/playlist'

const playTracks = (tracks) => {
  playlistState('CLEAR')
  playlistState('ADD_TRACKS', tracks)
  startPlaying()
}

export default playTracks
