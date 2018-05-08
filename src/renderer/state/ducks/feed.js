import { systemFeedAlbumsRecieved } from '#actions-system'
import { uiAlbumsSearchPerformed, uiAlbumsSearchCleared, uiAlbumSelected, uiAlbumDeselected } from '#actions-ui'

const DOMAIN = 'feed'

const initialState = {
  albums: [],
  selected: [],
  searchValue: ''
}

// SELECTORS

export const getFeedAlbums = state => state[DOMAIN].albums
export const getFeedSearchValue = state => state[DOMAIN].searchValue
export const getFeedSelectedAlbums = state => state[DOMAIN].selected

const actionHandlers = {
  [systemFeedAlbumsRecieved] ({ state, payload }) {
    return { ...state, albums: payload }
  },
  [uiAlbumsSearchPerformed] ({ state, payload }) {
    return { ...state, searchValue: payload }
  },
  [uiAlbumsSearchCleared] ({ state }) {
    return { ...state, searchValue: '' }
  },
  [uiAlbumSelected] ({ state, payload }) {
    const selected = [ ...state.selected, payload ]
    return { ...state, selected }
  },
  [uiAlbumDeselected] ({ state, payload }) {
    const selected = state.selected.filter(cid => cid !== payload)
    return { ...state, selected }
  }
}

export default { initialState, actionHandlers, DOMAIN }
