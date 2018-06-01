import {
  uiPlaylistTrackPlayed,
  uiPlaybackPaused,
  uiPlaybackResumed,
  uiDiscoverSelectedPlayed,
  uiAlbumPlayed
} from '#actions-ui'

const DOMAIN = 'playback'

const initialState = {
  isPaused: true
}

export const isPaused = state => state[DOMAIN].isPaused

const reducer = (state = initialState, action) => {
  const { type } = action
  switch (type) {
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
