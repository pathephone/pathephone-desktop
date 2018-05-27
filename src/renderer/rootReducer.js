import { combineReducers } from 'redux'
import { createForms } from 'react-redux-form'

import * as reducers from './state/reducers'
import * as forms from './state/forms'

const rootReducer = combineReducers({
  ...reducers,
  ...createForms(forms)
})

export default rootReducer
