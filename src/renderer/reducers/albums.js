import { reducerFactory } from '~utils/reduxTools'
import { appendAlbumsToBrowse, prependAlbumsToBrowse, changeAlbumsPageSearchValue, clearAlbumsPageSearchValue, selectAlbumsPageAlbum, deselectAlbumsPageAlbum } from '#actions'

const DOMAIN = 'albums'

const initialState = {
  found: [],
  selected: [],
  searchValue: ''
}

// SELECTORS

export const getAlbumsFound = state => state[DOMAIN].found
export const isAlbumsFound = state => state[DOMAIN].found.length !== 0
export const getAlbumsSelected = state => state[DOMAIN].selected
export const isAlbumsSelected = state => state[DOMAIN].selected.length !== 0
export const getAlbumsSearchValue = state => state[DOMAIN].searchValue
export const isAlbumsSearchPerformed = state => !!state[DOMAIN].searchValue

const actionHandlers = {
  [appendAlbumsToBrowse] ({ state, payload }) {
    const found = [ ...state.found, ...payload ]
    return {
      ...state, found
    }
  },
  [prependAlbumsToBrowse] ({ state, payload }) {
    const found = [ ...payload, ...state.found ]
    return {
      ...state, found
    }
  },
  [changeAlbumsPageSearchValue] ({ state, payload }) {
    return { ...state, searchValue: payload }
  },
  [clearAlbumsPageSearchValue] (state) {
    return { ...state, searchValue: '' }
  },
  [selectAlbumsPageAlbum] ({ state, payload }) {
    const selected = [ ...state.selected, payload ]
    return { ...state, selected }
  },
  [deselectAlbumsPageAlbum] ({ state, payload }) {
    const handleFilter = cid => cid !== payload
    const selected = state.selected.filter(handleFilter)
    return { ...state, selected }
  }
}

const reducer = reducerFactory({ initialState, actionHandlers })

export default { [DOMAIN]: reducer }
