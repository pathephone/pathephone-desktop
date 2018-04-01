import { combineReducers } from 'redux'

import player from './player'
import playlist from './playlist'
import appStatus from './appStatus'

const rootReducer = combineReducers({ player, playlist, appStatus })

export default rootReducer
