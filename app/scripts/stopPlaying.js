import playerState from 'state/player'
import currentTrackState from 'state/currentTrack'

const stopPlaying = () => {
  currentTrackState('NONE')
  playerState('STOP')
}

export default stopPlaying
