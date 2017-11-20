import startPlaying from './startPlaying'
import playlistState from '../state/playlist'

const playTracks = (tracks) => {
  playlistState('DROP')
  playlistState('ADD_TRACKS', tracks)
  startPlaying()
}

export default playTracks
