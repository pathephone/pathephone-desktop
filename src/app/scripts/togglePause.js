import playerState from '../state/player'

const playPause = (tracks) => {
  playerState('TOGGLE_PAUSE')
}

export default playPause
