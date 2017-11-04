// @flow
import createPoint from '../utils/recallPoint'

type currentPage = {
  name: string,
  props: {}
};

const data : currentPage = {
  name: 'albums',
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
