import { systemCacheTrackSucceed, systemPlayedTracksRecieved } from '~actions/system'
import { uiPlaylistCleared } from '~actions/ui'

const DOMAIN = 'cachedCIDs'

const initialState = {}

export const getCachedCIDs = state => state[DOMAIN]

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case systemCacheTrackSucceed.toString():
      return { ...state, [payload]: true }
    case uiPlaylistCleared.toString():
    case systemPlayedTracksRecieved.toString():
      return {}
    default:
      return state
  }
}

export default reducer
