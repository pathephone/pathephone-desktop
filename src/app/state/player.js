// @flow
import createAction from 'recall-action'

export const state = {
  pause: false,
  shuffle: false,
  repeat: false,
  shufflePath: [],
  volume: 80,
  timeline: 0
}

const actions = {
  TOGGLE_PAUSE () {
    state.pause = !state.pause
  },
  TOGGLE_SHUFFLE () {
    state.shuffle = !state.shuffle
  },
  TOGGLE_REPEAT () {
    state.repeat = !state.repeat
  },
  SET_VOLUME (value) {
    state['volume'] = value
  },
  SET_TIMELINE (value) {
    state['timeline'] = value
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
