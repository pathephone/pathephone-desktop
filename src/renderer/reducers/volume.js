import reducerFactory from '../utils/reducerFactory'

import actionTypes from '../constants/actionTypes'

const initialState = 0.7

const actionHandlers = {
  [actionTypes.USER_CHANGED_VOLUME] (state, nextValue) {
    return nextValue
  }
}

const reducer = reducerFactory({ initialState, actionHandlers })

export default reducer
