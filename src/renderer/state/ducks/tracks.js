import {
  systemPlayedTracksRecieved,
  systemQueuedTracksRecieved,
  systemTrackCached
} from '#actions-system'
import { uiPlaylistCleared } from '#actions-ui'

const DOMAIN = 'tracks'

const getInitialState = () => ({
  metadataByCid: {},
  cachedCids: []
})

export const getTracks = state => state[DOMAIN]

const reducer = (state = getInitialState(), action) => {
  const { type, payload } = action
  switch (type) {
    case systemPlayedTracksRecieved.toString(): {
      return { ...state, metadataByCid, cachedCids: [] }
    }
    case systemQueuedTracksRecieved.toString(): {
      const metadataByCid = {
        ...toMetadataByCid(payload),
        ...state.metadataByCid
      }
      return { ...state, metadataByCid }
    }
    case systemTrackCached.toString():
      return {
        ...state,
        cachedCids: [ ...state.cachedCids, ...payload ]
      }
    case uiPlaylistCleared.toString():
      return getInitialState()
    default:
      return state
  }
}

export default reducer
