import reducerFactory from '../utils/reducerFactory'

import {
  CHANGE_PAGE
} from '../actionTypes'

import routes from '../config/routes'

const initialState = 'albums feed'

const actionHandlers = {
  [CHANGE_PAGE] (state, pageName) {
    return { pageName }
  }
}

const reducer = reducerFactory({ initialState, actionHandlers })

export default reducer
