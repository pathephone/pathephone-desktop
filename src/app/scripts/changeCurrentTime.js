import playerState from '../state/player'

const changeVolume = (value) => {
  playerState('SET_CURRENT_TIME', value)
}

export default changeVolume
