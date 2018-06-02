import {
  uiPlaylistTrackPlayed,
  uiDiscoverSelectedPlayed,
  uiAlbumPlayed,
  uiPlaybackToggled
} from '#actions-ui'

const DOMAIN = 'audio'

const initialState = {
  isPaused: true
}

export const isPaused = state => state[DOMAIN].isPaused

const reducer = (state = initialState, action) => {
  const { type } = action
  switch (type) {
    case uiPlaybackToggled.toString():
      return { ...state, isPaused: !state.isPaused }
    case uiDiscoverSelectedPlayed.toString():
    case uiAlbumPlayed.toString():
    case uiPlaylistTrackPlayed.toString():
      return { ...state, isPaused: false }
    default:
      return state
  }
}

export default reducer
