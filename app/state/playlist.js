// @flow
import createPoint from 'recall-action'

export const state = []

const actions = {
  ADD_TRACKS (tracks) {
    state.push(...tracks)
  },
  DROP () {
    state.length = 0
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
