import { reducerFactory } from '~utils/reduxTools'
import { playPlaylistTrack, updateBufferedMap, initAudioPause, initAudioResume, reportAudioDurationUpdate } from '#actions'

const DOMAIN = 'audio'

// INITIAL STATE

const initialState = {
  isPaused: true,
  isReadyToPlay: false,
  timing: 0,
  id: null,
  bufferedMap: [],
  duration: 0
}

// SELECTORS

export const isPaused = state => state[DOMAIN].isPaused
export const isReadyToPlay = state => state[DOMAIN].isReadyToPlay
export const getPlayedTrackTiming = state => state[DOMAIN].timing
export const getPlayedTrackId = state => state[DOMAIN].id
export const getPlayedTrackBufferedMap = state => state[DOMAIN].bufferedMap
export const getPlayedTrackDuration = state => state[DOMAIN].duration

// REDUCER

const actionHandlers = {
  [initAudioPause] ({ state }) {
    return { ...state, isPaused: true }
  },
  [initAudioResume] ({ state }) {
    return { ...state, isPaused: false }
  },
  [playPlaylistTrack] ({ state, payload }) {
    return { ...state, currentTrackId: payload }
  },
  [updateBufferedMap] ({ state, payload }) {
    return { ...state, bufferedMap: payload }
  },
  [reportAudioDurationUpdate] ({ state, payload }) {
    return { ...state, duration: payload }
  }
}

const reducer = reducerFactory({ initialState, actionHandlers })

export default { [DOMAIN]: reducer }
