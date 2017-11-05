// @flow
import createPoint from 'recall-action'

const state = {
  current: null,
  play: false
}

const point = createPoint(
  (ACTION, ...params) => {
    if (ACTION === 'TOGGLE') {
      state.play = !state.play
    } else
    if (ACTION === 'SET_CURRENT') {
      const [current] = params
      state.current = current
    } else
    if (ACTION === 'STOP') {
      state.current = null
      state.play = false
    }
    return state
  }
)

export default point
