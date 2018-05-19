import {
  systemPlayedTracksRecieved,
  systemQueuedTracksRecieved
} from '#actions-system'
import { uiPlaylistTrackRemoved, uiPlaylistCleared } from '#actions-ui'

const DOMAIN = 'playlist'

const initialState = []

export const getPlaylistTracks = state => state[DOMAIN]
export const isPlaylistEmpty = state => state[DOMAIN].length === 0

const actionHandlers = {
  [systemPlayedTracksRecieved] ({ state, payload }) {
    return [ ...payload ]
  },
  [systemQueuedTracksRecieved] ({ state, payload }) {
    return [ ...state, ...payload ]
  },
  [uiPlaylistTrackRemoved] ({ state, payload }) {
    const handleFilter = ({ id }) => id !== payload
    return state.filter(handleFilter)
  },
  [uiPlaylistCleared] () {
    return []
  }
}

export default { initialState, actionHandlers, DOMAIN }
