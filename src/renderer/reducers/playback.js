import { reducerFactory, newDomainSelectorFactory } from '~utils/reduxTools'
import { pause, resume, playPlaylistTrack, updateBufferedMap } from '#actions'

const DOMAIN = 'playback'

// INITIAL STATE

const initialState = {
  isPaused: true,
  timing: 0,
  currentTrackId: null,
  bufferedMap: []
}

// SELECTORS

const sf = newDomainSelectorFactory(DOMAIN)

export const isPaused = sf('isPaused')
export const getTiming = sf('timing')
export const getCurrentTrackId = sf('currentTrackId')
export const getBufferedMap = sf('bufferedMap')

// REDUCER

const actionHandlers = {
  [pause] ({ state }) {
    return { ...state, isPaused: true }
  },
  [resume] ({ state }) {
    return { ...state, isPaused: false }
  },
  [playPlaylistTrack] ({ state, payload }) {
    return { ...state, currentTrackId: payload }
  },
  [updateBufferedMap] ({ state, payload }) {
    return { ...state, bufferedMap: payload }
  }
}

const reducer = reducerFactory({ initialState, actionHandlers })

export default { [DOMAIN]: reducer }
