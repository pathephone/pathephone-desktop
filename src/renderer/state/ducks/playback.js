import { uiRepeatToggled, uiShuffleToggled, uiPlaylistTrackPlayed, uiPlaybackPaused, uiPlaybackResumed, uiDiscoverSelectedPlayed, uiAlbumPlayed } from '#actions-ui'

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
    case uiPlaybackPaused.toString():
      return { ...state, isPaused: true }
    case uiPlaybackResumed.toString():
    case uiDiscoverSelectedPlayed.toString():
    case uiAlbumPlayed.toString():
    case uiPlaylistTrackPlayed.toString():
      return { ...state, isPaused: false }
    default:
      return state
  }
}

export default reducer
