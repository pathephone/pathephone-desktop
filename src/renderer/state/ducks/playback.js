import { uiRepeatToggled, uiShuffleToggled, uiPlayerPaused, uiPlayerResumed, uiPlaylistTrackPlayed } from '#actions-ui'

const DOMAIN = 'playback'

const initialState = {
  isPaused: true,
  shuffle: false,
  repeat: false,
  trackId: null
}

export const isPaused = state => state[DOMAIN].isPaused
export const isShuffleTurnedOn = state => state[DOMAIN].shuffle
export const isRepeatTurnedOn = state => state[DOMAIN].repeat
export const getPlayedTrackId = state => state[DOMAIN].trackId

const actionHandlers = {
  [uiRepeatToggled] ({ state }) {
    return { ...state, shuffle: !state.shuffle }
  },
  [uiShuffleToggled] ({ state }) {
    return { ...state, repeat: !state.repeat }
  },
  [uiPlayerPaused] ({ state }) {
    return { ...state, isPaused: true }
  },
  [uiPlayerResumed] ({ state }) {
    return { ...state, isPaused: false }
  },
  [uiPlaylistTrackPlayed] ({ state, payload }) {
    return { ...state, trackId: payload }
  }
}

export default { actionHandlers, initialState, DOMAIN }
