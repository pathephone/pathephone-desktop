import { systemTrackCached, systemPlayedTracksRecieved } from '#actions-system'
import { uiPlaylistCleared } from '#actions-ui'

const DOMAIN = 'cachedTracks'

const initialState = []

export const getCachedTracks = state => state[DOMAIN]

const actionHandlers = {
  [systemTrackCached] ({ state, payload }) {
    if (!state.includes(payload)) {
      return [ ...state, payload ]
    }
  },
  [uiPlaylistCleared] () {
    return []
  },
  [systemPlayedTracksRecieved] () {
    return []
  }
}

export default { initialState, actionHandlers, DOMAIN }
