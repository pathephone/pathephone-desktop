import stopPlaying from './stopPlaying'
import startPlaying from './startPlaying'
import playlistState from '../state/playlist'

const playTracks = (tracks) => {
  stopPlaying()
  playlistState('DROP')
  playlistState('ADD_TRACKS', tracks)
  startPlaying()
}

export default playTracks
