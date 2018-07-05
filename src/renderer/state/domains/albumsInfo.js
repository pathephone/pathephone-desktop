import {
  systemAlbumsCollectionInfoRecieved,
  systemShareCandidateSaveSucceed,
  systemAlbumsRecievedCacheTransited,
  systemDiscoverSelectedActionSucceed
} from '~actions/system'

const DOMAIN = 'albumsInfo'

const initialState = {
  albumsCount: null
}

export const getAlbumsCount = state => state[DOMAIN].albumsCount

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case systemAlbumsCollectionInfoRecieved.toString():
    case systemShareCandidateSaveSucceed.toString():
    case systemAlbumsRecievedCacheTransited.toString():
      return { albumsCount: payload.albumsCount }
    case systemDiscoverSelectedActionSucceed.toString():
      if (payload) {
        return { albumsCount: payload.albumsCount }
      }
      return state
    default:
      return state
  }
}

export default reducer
