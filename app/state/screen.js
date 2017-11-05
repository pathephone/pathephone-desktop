// @flow
import createPoint from 'recall-action'

type screenState = {
  width: number,
  height: number
};

let state : screenState = {
  width: 0,
  height: 0
}

const point = createPoint(
  (ACTION, params) => {
    if (ACTION === 'UPDATE') {
      const { width, height } : screenState = params
      state = { width, height }
    }
    return state
  }
)

export default point
