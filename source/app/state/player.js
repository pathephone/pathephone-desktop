// @flow
import createAction from 'recall-action'

const state = {
  status: 'STOPED'
}

const actions = {
  PLAY () {
    state.status = 'PLAYING'
  },
  STOP () {
    state.status = 'STOPED'
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
