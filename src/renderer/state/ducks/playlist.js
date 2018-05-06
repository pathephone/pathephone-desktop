import { systemPlaylistAlbumTracksRecieved } from '#actions-system'
import { uiPlaylistTrackRemoved, uiPlaylistCleared } from '#actions-ui'

const DOMAIN = 'playlist'

const initialState = []

export const getPlaylistTracks = state => state[DOMAIN]
export const isPlaylistEmpty = state => state[DOMAIN].length === 0

const actionHandlers = {
  [systemPlaylistAlbumTracksRecieved] (state, newTracks) {
    return [ ...state, ...newTracks ]
  },
  [uiPlaylistTrackRemoved] (state, removeId) {
    const handleFilter = ({ id }) => id !== removeId
    return state.filter(handleFilter)
  },
  [uiPlaylistCleared] () {
    return []
  }
}

export default { initialState, actionHandlers, DOMAIN }
