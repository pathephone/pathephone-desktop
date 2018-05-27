import {
  systemAudioBufferingProceed,
  systemAudioDurationRecieved,
  systemAudioReadyToPlay,
  systemAudioTimingChanged,
  systemAudioEnded,
  systemAudioLoadStarted
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

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case systemAudioDurationRecieved.toString():
      return { ...state, duration: payload }
    case systemAudioBufferingProceed.toString():
      return { ...state, bufferedMap: payload }
    case systemAudioReadyToPlay.toString():
      return { ...state, isAudioReadyToPlay: true }
    case systemAudioTimingChanged.toString():
      return { ...state, timing: payload }
    case systemAudioEnded.toString():
    case systemAudioLoadStarted.toString():
      return { ...initialState }
    default:
      return state
  }
}

export default reducer
