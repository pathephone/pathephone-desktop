import { uiRepeatToggled, uiShuffleToggled } from '#actions-ui'
import { systemAudioPlayed, systemAudioPaused } from '#actions-system'

const DOMAIN = 'playback'

const initialState = {
  isPaused: true,
  shuffle: false,
  repeat: false
}

export const isPaused = state => state[DOMAIN].isPaused
export const isShuffleTurnedOn = state => state[DOMAIN].shuffle
export const isRepeatTurnedOn = state => state[DOMAIN].repeat

const reducer = (state = initialState, action) => {
  const { type } = action
  switch (type) {
    case uiRepeatToggled.toString():
      return { ...state, repeat: !state.repeat }
    case uiShuffleToggled.toString():
      return { ...state, shuffle: !state.shuffle }
    case systemAudioPaused.toString():
      return { ...state, isPaused: true }
    case systemAudioPlayed.toString():
      return { ...state, isPaused: false }
    default:
      return state
  }
}

export default reducer
