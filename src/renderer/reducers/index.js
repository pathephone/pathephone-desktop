import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import playback from './playback'
import playlist from './playlist'
import app from './app'
import volume from './volume'

const rootReducer = combineReducers({
  ...playback,
  ...playlist,
  ...app,
  ...volume,
  form: formReducer
})

export default rootReducer
