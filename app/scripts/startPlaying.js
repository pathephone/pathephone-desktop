import { state as playlistData } from 'state/playlist'
import playerState from 'state/player'
import currentTrackState from 'state/currentTrack'

const startPlaying = () => {
  const { id } = playlistData[0]
  currentTrackState('SET', id)
  playerState('PLAY')
}

export default startPlaying
