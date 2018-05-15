import { systemDiscoverAlbumsFetchSucceed } from '#actions-system'
import { uiAlbumsSearchPerformed, uiAlbumsSearchCleared, uiAlbumSelected, uiAlbumDeselected, uiMoreDiscoverAlbumsRequested, uiFeedSelectionCanceled } from '#actions-ui'
import { DISCOVER_FEED_LIMIT_STEP } from '~data/constants'

const DOMAIN = 'feed'

const initialState = {
  albumsLimit: DISCOVER_FEED_LIMIT_STEP,
  albums: [],
  selected: [],
  searchValue: ''
}

// SELECTORS

export const getFeedAlbumsLimit = state => state[DOMAIN].albumsLimit
export const getFeedAlbums = state => state[DOMAIN].albums
export const getFeedSearchValue = state => state[DOMAIN].searchValue
export const getFeedSelectedAlbums = state => state[DOMAIN].selected

const actionHandlers = {
  [uiMoreDiscoverAlbumsRequested] ({ state }) {
    return { ...state, albumsLimit: state.albumsLimit + DISCOVER_FEED_LIMIT_STEP }
  },
  [systemDiscoverAlbumsFetchSucceed] ({ state, payload }) {
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
  },
  [uiFeedSelectionCanceled] ({ state }) {
    return { ...state, selected: [] }
  }
}

export default { initialState, actionHandlers, DOMAIN }
