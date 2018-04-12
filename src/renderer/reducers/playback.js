import reducerFactory from '../utils/reducerFactory'

import actionTypes from '../constants/actionTypes'

const initialState = {
  paused: true,
  timing: 0,
  currentTrackId: null,
  bufferedMap: []
}

const actionHandlers = {
  [actionTypes.USER_CLICKED_PAUSE] (state) {
    return { ...state, paused: true }
  },
  [actionTypes.USER_CLICKED_RESUME] (state) {
    return { ...state, paused: false }
  },
  [actionTypes.USER_CLICKED_PLAYLIST_TRACK] (state, currentTrackId) {
    return { ...state, currentTrackId }
  },
  [actionTypes.PLAYER_UPDATED_BUFFER] (state, bufferedMap) {
    return { ...state, bufferedMap }
  }
}

const reducer = reducerFactory({ initialState, actionHandlers })

export default reducer
