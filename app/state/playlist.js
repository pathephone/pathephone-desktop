// @flow
import createPoint from 'recall-action'

const state = []

const point = createPoint(
  (ACTION, ...params) => {
    if (ACTION === 'ADD_TRACKS') {
      params.forEach((track) => {
        const _id = new Date().getTime()
        state.push({ _id, ...track })
      })
    }
    return state
  }
)

export default point
