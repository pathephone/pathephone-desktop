import {
  systemCacheCoverSucceed
} from '~actions/system'
import {
  uiDiscoverPageClosed
} from '~actions/ui'

const DOMAIN = 'localCoversCIDs'

const initialState = {}

export const getLocalCovdersCIDs = state => state[DOMAIN]

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case systemCacheCoverSucceed.toString():
      return { ...state, [payload]: true }
    case uiDiscoverPageClosed.toString():
      return {}
    default:
      return state
  }
}

export default reducer
