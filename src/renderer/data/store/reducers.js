import { combineReducers } from 'redux'

import playback from './reducers/playback'
import playlist from './reducers/playlist'
import app from './reducers/app'
import volume from './reducers/volume'

const rootReducer = combineReducers(
  Object.assign({}, playback, playlist, app, volume)
)

export default rootReducer
