import {
  systemAudioTimingUpdated,
  systemAudioPlaybackEnded,
  systemAudioBufferingProceed,
  systemAudioDurationRecieved
} from '#actions-system'

const DOMAIN = 'audio'

export const getPlayedTrackTiming = state => state[DOMAIN].timing
export const getPlayedTrackBufferedMap = state => state[DOMAIN].bufferedMap
export const getPlayedTrackDuration = state => state[DOMAIN].duration

const initialState = {
  duration: 0,
  bufferedMap: [],
  isReadyToPlay: false,
  timing: 0
}

const actionHandlers = {
  [systemAudioDurationRecieved] ({ state, payload }) {
    return { ...state, duration: payload }
  },
  [systemAudioBufferingProceed] ({ state, payload }) {
    const { bufferedMap, isReadyToPlay } = payload
    return { ...state, bufferedMap, isReadyToPlay }
  },
  [systemAudioTimingUpdated] ({ state, payload }) {
    return { ...state, timing: payload }
  },
  [systemAudioPlaybackEnded] ({ state }) {
    return { ...initialState }
  }
}

export default { actionHandlers, initialState, DOMAIN }
