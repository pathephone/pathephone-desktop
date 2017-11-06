// @flow
import createAction from 'recall-action'

const state = {
  id: null
}

const actions = {
  SET (id) {
    state.id = id
  },
  NONE () {
    state.id = null
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
