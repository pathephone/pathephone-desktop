import reducerFactory from '../utils/reducerFactory'

import {
  PAUSE_PLAYBACK,
  RESUME_PLAYBACK,
  TOGGLE_SHUFFLE,
  TOGGLE_REPEAT,
  SET_VOLUME,
  SET_PLAYBACK_POSITION
} from '../actionTypes'

const initialState = {
  pause: true,
  shuffle: false,
  repeat: false,
  shufflePath: [],
  volume: 0.7,
  currentTime: 0
}

const actionHandlers = {
  [PAUSE_PLAYBACK] (state) {
    return { ...state, pause: false }
  },
  [RESUME_PLAYBACK] (state) {
    return { ...state, pause: true }
  },
  [TOGGLE_SHUFFLE] (state) {
    return { ...state, shuffle: !state.shuffle }
  },
  [TOGGLE_REPEAT] (state) {
    return { ...state, repeat: !state.repeat }
  },
  [SET_VOLUME] (state, volume) {
    return { ...state, volume }
  },
  [SET_PLAYBACK_POSITION] (state, currentTime) {
    return { ...state, currentTime }
  }
}

const reducer = reducerFactory({ initialState, actionHandlers })

export default reducer
