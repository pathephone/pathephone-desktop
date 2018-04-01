import reducerFactory from '../utils/reducerFactory'
import getRandomString from '../utils/getRandomString'

import {
  ADD_TRACKS_TO_PLAYLIST,
  REMOVE_TRACK_FROM_PLAYLIST,
  CLEAR_PLAYLIST,
  PLAY_PLAYLIST_TRACK,
  TRACK_IS_DOWNLOADED
} from '../actionTypes'

const initialState = []

const actionHandlers = {
  [ADD_TRACKS_TO_PLAYLIST] (state, newTracks) {
    const nextState = [...state]
    const newTracksTransformed = newTracks.map(
      track => ({
        ...track,
        id: getRandomString(),
        current: nextState.length === 0,
        downloaded: false
      })
    )
    return [ ...state, ...newTracksTransformed ]
  },
  [REMOVE_TRACK_FROM_PLAYLIST] (state, removeId) {
    const handleFilter = ({ id }) => id !== removeId
    return state.filter(handleFilter)
  },
  [CLEAR_PLAYLIST] () {
    return []
  },
  [PLAY_PLAYLIST_TRACK] (state, nextCurrentId) {
    const nextState = [...state]
    const current = nextState.find(
      ({ current }) => current
    )
    current.current = false
    const target = state.find(
      ({ id }) => nextCurrentId === id
    )
    target.current = true
    return nextState
  },
  [TRACK_IS_DOWNLOADED] (state, hash) {
    const nextState = [...state]
    const handleFilter = t => t.hash === hash
    const targets = nextState.filter(handleFilter)
    const handleEach = t => { t.downloaded = true }
    targets.forEach(handleEach)
    return nextState
  }
}

const reducer = reducerFactory({ initialState, actionHandlers })

export default reducer
