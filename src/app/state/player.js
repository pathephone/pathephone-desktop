import {
  PLAY,
  PAUSE,
  TOGGLE_REPEAT,
  TOGGLE_SHUFFLE,
  SET_VOLUME,
  SET_CURRENT_TIME
} from '../actionTypes'

const getInitialState = () => ({
  pause: true,
  shuffle: false,
  repeat: false,
  shufflePath: [],
  volume: 0.7,
  currentTime: 0
})

const reducer = (state = getInitialState(), action) => {
  switch (action.type) {
    case PLAY:
      return { ...state, pause: false }
    case PAUSE:
      return { ...state, pause: true }
    case TOGGLE_SHUFFLE:
      return { ...state, shuffle: !state.shuffle }
    case TOGGLE_REPEAT:
      return { ...state, repeat: !state.repeat }
    case SET_VOLUME:
      return { ...state, volume: action.payload }
    case SET_CURRENT_TIME:
      return { ...state, currentTime: action.payload }
    default:
      return state
  }
}

export default reducer
