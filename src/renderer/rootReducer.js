import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import * as reducers from './state/reducers'

const rootReducer = combineReducers({
  ...reducers,
  form: formReducer
})

export default rootReducer
