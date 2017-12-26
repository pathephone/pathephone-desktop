import playerState from '../state/player'

const changeVolume = (value) => {
  playerState('SET_TIMELINE', value)
}

export default changeVolume
