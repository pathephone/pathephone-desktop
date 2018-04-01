import reducerFactory from '../utils/reducerFactory'

import {
  APP_START_FAILED,
  APP_START_SUCCEEDED,
  CLOSE_APP
} from '../actionTypes'

const initialState = { stage: 0, error: null }

const actionHandlers = {
  [APP_START_SUCCEEDED] () {
    return { stage: 1, error: null }
  },
  [APP_START_FAILED] (state, error) {
    return { stage: 2, error }
  },
  [CLOSE_APP] () {
    return { stage: 3, error: null }
  }
}

const reducer = reducerFactory({ initialState, actionHandlers })

export default reducer
