import { reducerFactory } from '~utils/reduxTools'
import { addTracksToPlaylist, removeTrackFromPlaylist, clearPlaylist } from '#actions'

const DOMAIN = 'playlist'

const initialState = []

// SELECTORS

export const getPlaylistTracks = state => state[DOMAIN]
export const isPlaylistEmpty = state => state[DOMAIN].length === 0

const actionHandlers = {
  [addTracksToPlaylist] (state, newTracks) {
    return [ ...state, ...newTracks ]
  },
  [removeTrackFromPlaylist] (state, removeId) {
    const handleFilter = ({ id }) => id !== removeId
    return state.filter(handleFilter)
  },
  [clearPlaylist] () {
    return []
  }
}

const reducer = reducerFactory({ initialState, actionHandlers })

export default { [DOMAIN]: reducer }
