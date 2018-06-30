import { systemAlbumsCollectionInfoRecieved } from '~actions/system'

const DOMAIN = 'albumsInfo'

const initialState = {
  albumsCount: null
}

export const getAlbumsCount = state => state[DOMAIN].albumsCount

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case systemAlbumsCollectionInfoRecieved.toString():
      return payload
    default:
      return state
  }
}

export default reducer
