
const DOMAIN = 'feed'

const initialState = {
  found: [],
  selected: [],
  searchValue: ''
}

// SELECTORS

export const getAlbumsFound = state => state[DOMAIN].found
export const getAlbumsSelected = state => state[DOMAIN].selected
export const getAlbumsSearchValue = state => state[DOMAIN].searchValue
export const isAlbumsFound = state => getAlbumsFound(state).length !== 0
export const isAlbumsSelected = state => getAlbumsSelected(state).length !== 0
export const isAlbumsSearchPerformed = state => getAlbumsSearchValue(state).searchValue

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

export default { initialState, actionHandlers, DOMAIN }
