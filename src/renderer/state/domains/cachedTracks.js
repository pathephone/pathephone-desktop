import { systemTrackCached, systemPlayedTracksRecieved } from '~actions/system'
import { uiPlaylistCleared } from '~actions/ui'

const DOMAIN = 'cachedTracks'

const initialState = []

export const getCachedTracks = state => state[DOMAIN]

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case systemTrackCached.toString():
      return [...state, payload]
    case uiPlaylistCleared.toString():
    case systemPlayedTracksRecieved.toString():
      return []
    default:
      return state
  }
}

export default reducer
