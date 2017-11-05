// @flow
import createPoint from 'recall-action'

const data = {
  name: 'albums-found',
  props: {}
}

const actions = {
  CHANGE (...params) {
    const [name, props] = params
    data.name = name
    data.props = props
  }
}

const point = createPoint(
  (ACTION, ...params) => {
    if (ACTION) {
      actions[ACTION](...params)
    }
    return data
  }
)

export default point
