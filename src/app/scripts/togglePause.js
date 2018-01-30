import playerState from '../state/player'

const playPause = (tracks) => {
  const { pause } = playerState()
  if (pause) {
    playerState('PLAY')
  } else {
    playerState('PAUSE')
  }
}

export default playPause
