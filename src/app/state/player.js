// @flow
import createAction from 'recall-action'

export const state = {
  status: 'STOPED',
  shuffle: false,
  repeat: false,
  shufflePath: []
}

const actions = {
  PLAY () {
    state.status = 'PLAYING'
  },
  STOP () {
    state.status = 'STOPED'
  },
  SET_VALUE (...params) {
    const [name, value] = params
    state[name] = value
  },
  TOGGLE_SHUFFLE () {
    state.shuffle = !state.shuffle
  },
  TOGGLE_REPEAT () {
    state.repeat = !state.repeat
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
