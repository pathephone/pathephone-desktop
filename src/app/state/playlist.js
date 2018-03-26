import getRandomString from '../utils/getRandomString'
import { start } from 'repl'

const actionHandlers = {
  ADD_TRACKS_TO_PLAYLIST (state, newTracks) {
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
  REMOVE_TRACKS_FROM_PLAYLIST (state, ids) {
    const handleFilter = ({ id }) => !ids.includes(id)
    return state.filter(handleFilter)
  },
  CLEAR_PLAYLIST () {
    return []
  },
  SET_CURRENT (state, nextCurrentId) {
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
  SET_DOWNLOADED (state, hash) {
    const nextState = [...state]
    const handleFilter = t => t.hash === hash
    const targets = nextState.filter(handleFilter)
    const handleEach = t => { t.downloaded = true }
    targets.forEach(handleEach)
    return nextState
  }
}

const reducer = (state = [], action) => {
  const actionHandler = actionHandlers[action.type]
  if (actionHandler) {
    return actionHandler(state, action.payload)
  }
  return state
}

export default reducer
