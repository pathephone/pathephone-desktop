import { systemDiscoverAlbumsFetchSucceed } from '#actions-system'
import { uiDiscoverSearchPerformed, uiDiscoverSearchCleared, uiDiscoverAlbumSelected, uiDiscoverAlbumDeselected, uiDiscoverAlbumsRequested, uiDiscoverSelectedCanceled } from '#actions-ui'
import { DISCOVER_FEED_LIMIT_STEP } from '~data/constants'

const DOMAIN = 'feed'

const initialState = {
  albumsLimit: DISCOVER_FEED_LIMIT_STEP,
  albums: [],
  searchValue: ''
}

// SELECTORS

export const getFeedAlbumsLimit = state => state[DOMAIN].albumsLimit
export const getFeedAlbums = state => state[DOMAIN].albums
export const getDiscoverSearchValue = state => state[DOMAIN].searchValue

const actionHandlers = {
  [uiDiscoverAlbumsRequested] ({ state }) {
    return { ...state, albumsLimit: state.albumsLimit + DISCOVER_FEED_LIMIT_STEP }
  },
  [systemDiscoverAlbumsFetchSucceed] ({ state, payload }) {
    return { ...state, albums: payload }
  },
  [uiDiscoverSearchPerformed] ({ state, payload }) {
    return { ...state, searchValue: payload }
  },
  [uiDiscoverSearchCleared] ({ state }) {
    return { ...state, searchValue: '' }
  }
}

export default { initialState, actionHandlers, DOMAIN }
