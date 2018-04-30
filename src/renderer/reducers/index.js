import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import audio from './audio'
export * from './audio'

import playlist from './playlist' // eslint-disable-line
export * from './playlist'

import app from './app' // eslint-disable-line
export * from './app'

import volume from './volume' // eslint-disable-line
export * from './volume'

import playback from './playback' // eslint-disable-line
export * from './playback'

const rootReducer = combineReducers({
  ...audio,
  ...playlist,
  ...app,
  ...volume,
  ...playback,
  form: formReducer
})

export default rootReducer
