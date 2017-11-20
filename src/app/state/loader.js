// @flow
import createPoint from 'recall-action'

const state = {
  on: false
}

const actions = {
  TOOGLE () {
    state.on = !state.on
  }
}

const point = createPoint(
  (ACTION, ...params) => {
    if (ACTION) {
      actions[ACTION](...params)
    }
    return state
  }
)

export default point
