import { combineReducers } from 'redux'

import playback from './playback'
import playlist from './playlist'
import app from './app'
import volume from './volume'

const rootReducer = combineReducers(
  Object.assign({}, playback, playlist, app, volume)
)

export default rootReducer
