import { combineReducers } from 'redux'

import * as reducers from './state/reducers'

const rootReducer = combineReducers({
  ...reducers
})

export default rootReducer
