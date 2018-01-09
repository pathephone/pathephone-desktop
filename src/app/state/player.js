// @flow
import createAction from 'recall-action'

export const state = {
  pause: true,
  shuffle: false,
  repeat: false,
  shufflePath: [],
  volume: 0.7,
  currentTime: 0
}

const actions = {
  PAUSE () {
    state.pause = true
  },
  PLAY () {
    state.pause = false
  },
  TOGGLE_SHUFFLE () {
    state.shuffle = !state.shuffle
  },
  TOGGLE_REPEAT () {
    state.repeat = !state.repeat
  },
  SET_VOLUME (value) {
    state.volume = value
  },
  SET_CURRENT_TIME (value) {
    state.currentTime = value
  }
}

const point = createAction(
  (ACTION, ...params) => {
    if (ACTION) {
      actions[ACTION](...params)
    }
    return state
  }
)

export default point
