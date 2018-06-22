import {
  systemDiscoverFetchSucceed,
  systemDiscoverFetchFailed
} from '~actions/system'
import {
  uiDiscoverSearchPerformed,
  uiDiscoverSearchCleared,
  uiDiscoverPageClosed,
  uiDiscoverPageOpened
} from '~actions/ui'

const DOMAIN = 'discoverPage'

const initialState = {
  albums: null,
  searchValue: '',
  isFailed: false,
  isProcessing: false
}

// SELECTORS

export const getDiscoverFeedAlbums = state => state[DOMAIN].albums
export const getDiscoverSearchValue = state => state[DOMAIN].searchValue
export const isDiscoverHasFailed = state => state[DOMAIN].isFailed
export const isDiscoverPageProcessing = state => state[DOMAIN].isProcessing

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case uiDiscoverPageOpened.toString():
      return { ...state, isProcessing: true }
    case uiDiscoverPageClosed.toString():
      return { ...initialState }
    case uiDiscoverSearchPerformed.toString():
      return {
        ...initialState,
        searchValue: payload,
        isProcessing: true
      }
    case uiDiscoverSearchCleared.toString():
      return { ...initialState, isProcessing: true }
    case systemDiscoverFetchSucceed.toString():
      return { ...state, albums: payload, isProcessing: false }
    case systemDiscoverFetchFailed.toString():
      return { ...state, isFailed: true, isProcessing: false }
    default:
      return state
  }
}

export default reducer
