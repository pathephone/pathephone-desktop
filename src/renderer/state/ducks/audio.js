import {
  systemAudioPlaybackEnded,
  systemAudioBufferingProceed,
  systemAudioDurationRecieved,
  systemAudioReadyToPlay,
  systemAudioTimingChanged
} from '#actions-system'

const DOMAIN = 'audio'

export const getAudioTiming = state => state[DOMAIN].timing
export const getAudioDuration = state => state[DOMAIN].duration
export const getAudioBufferedMap = state => state[DOMAIN].bufferedMap
export const isAudioReadyToPlay = state => state[DOMAIN].isAudioReadyToPlay

const initialState = {
  duration: null,
  timing: 0,
  bufferedMap: [],
  isAudioReadyToPlay: false
}

const actionHandlers = {
  [systemAudioDurationRecieved] ({ state, payload }) {
    return { ...state, duration: payload }
  },
  [systemAudioBufferingProceed] ({ state, payload }) {
    return { ...state, bufferedMap: payload }
  },
  [systemAudioReadyToPlay] ({ state }) {
    return { ...state, isAudioReadyToPlay: true }
  },
  [systemAudioTimingChanged] ({ state, payload }) {
    return { ...state, timing: payload }
  },
  [systemAudioPlaybackEnded] ({ state }) {
    return { ...initialState }
  }
}

export default { actionHandlers, initialState, DOMAIN }
