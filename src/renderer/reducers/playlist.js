import reducerFactory from '../utils/reducerFactory'

import * as actionTypes from '../constants/actionTypes'

const initialState = []

const actionHandlers = {
  [actionTypes.USER_CLICKED_ADD_ALBUM] (state, albumTracks) {
    /*
    const newTracksTransformed = albumTracks.map(
      track => ({
        ...track,
        id: getRandomString(),
        current: nextState.length === 0,
        downloaded: false
      })
    )
    */
    return [ ...state, ...albumTracks ]
  },
  [actionTypes.USER_CLICKED_REMOVE_TRACK_FROM_PLAYLIST] (state, removeId) {
    const handleFilter = ({ id }) => id !== removeId
    return state.filter(handleFilter)
  },
  [actionTypes.USER_CLICKED_CLEAR_PLAYLIST] () {
    return []
  }
}

const reducer = reducerFactory({ initialState, actionHandlers })

export default reducer
