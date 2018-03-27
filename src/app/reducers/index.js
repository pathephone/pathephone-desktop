import { combineReducers } from 'redux'

import player from './player'
import playlist from './playlist'

const rootReducer = combineReducers({ player, playlist })

export default rootReducer
