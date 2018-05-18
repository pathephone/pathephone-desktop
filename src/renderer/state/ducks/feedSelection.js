import { systemDiscoverSelectedActionSucceed } from '#actions-system'
import {
  uiDiscoverAlbumSelected,
  uiDiscoverAlbumDeselected,
  uiDiscoverSelectedCanceled
} from '#actions-ui'

const DOMAIN = 'feedSelection'

const initialState = []

// SELECTORS

export const getDiscoverSelectedAlbums = state => state[DOMAIN]

// ACTIONS

const actionHandlers = {
  [uiDiscoverAlbumSelected] ({ state, payload }) {
    return [ ...state, payload ]
  },
  [uiDiscoverAlbumDeselected] ({ state, payload }) {
    return state.filter(cid => cid !== payload)
  },
  [systemDiscoverSelectedActionSucceed] () {
    return []
  },
  [uiDiscoverSelectedCanceled] () {
    return []
  }
}

export default { initialState, actionHandlers, DOMAIN }
