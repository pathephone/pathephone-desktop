import { systemDiscoverAlbumsFetchSucceed } from '~actions/system'
import { uiDiscoverSearchPerformed, uiDiscoverSearchCleared, uiDiscoverAlbumsRequested } from '~actions/ui'
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

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case uiDiscoverAlbumsRequested.toString():
      return { ...state, albumsLimit: state.albumsLimit + DISCOVER_FEED_LIMIT_STEP }
    case systemDiscoverAlbumsFetchSucceed.toString():
      return { ...state, albums: payload }
    case uiDiscoverSearchPerformed.toString():
      return { ...state, searchValue: payload }
    case uiDiscoverSearchCleared.toString():
      return { ...state, searchValue: '' }
    default:
      return state
  }
}

export default reducer
