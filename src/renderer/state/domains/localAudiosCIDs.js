import { systemCacheTrackSucceed, systemPlayedTracksRecieved } from '~actions/system'
import { uiPlaylistCleared } from '~actions/ui'

const DOMAIN = 'localAudiosCIDs'

const initialState = {}

export const getLocalAudiosCIDs = state => state[DOMAIN]

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case systemCacheTrackSucceed.toString():
      return { ...state, [payload]: true }
    case uiPlaylistCleared.toString():
    case systemPlayedTracksRecieved.toString():
      return {}
    default:
      return state
  }
}

export default reducer
