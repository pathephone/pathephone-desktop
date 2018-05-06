import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import { reducerFactory } from '~utils/reduxTools'

import ducks from './state/ducks'

const handleReduce = (acc, duck) => {
  const { DOMAIN, ...rest } = duck
  acc[DOMAIN] = reducerFactory(rest)
  return acc
}

const reducersMap = ducks.reduce(handleReduce, {})

const rootReducer = combineReducers({
  ...reducersMap,
  form: formReducer
})

export default rootReducer
