import playerState from '../state/player'

const changeVolume = (value) => {
  playerState('SET_VOLUME', value)
}

export default changeVolume
