import { IS_RENDERER } from '../config'

const id = (id) => {
  if (IS_RENDERER) {
    return id
  }
  return `#${id}`
}

export const E2E_LOCK_SCREEN_ID = id('locker')
export const E2E_READY_SCREEN_ID = id('ready-app')
export const E2E_NOTIFICATIONS_CONTAINER_ID = id('notifications-container')

// NAVIGATION

export const E2E_NAV_DISCOVER_LINK_ID = id('nav-discover-link')
export const E2E_NAV_SHARE_LINK_ID = id('nav-share-album-link')

// DISCOVER PAGE

export const E2E_DISCOVER_PAGE_ID = id('discover-page')
export const E2E_DISCOVER_FEED_ID = id('discover-feed')
export const E2E_DISCOVER_NO_ALBUMS_MESSAGE_ID = id('discover-no-albums')
export const E2E_DISCOVER_PAGE_SELECTED_BAR_ID = id('discover-page-selected-bar')
export const E2E_DISCOVER_PAGE_SEARCH_INPUT_ID = id('discover-page-search-input')
export const E2E_DISCOVER_PAGE_SELECTED_COUNT_ID = id('discover-page-selected-count')
export const E2E_DISCOVER_PAGE_PLAY_SELECTED_BUTTON_ID = id('discover-page-play-selected-button')
export const E2E_DISCOVER_PAGE_QUEUE_SELECTED_BUTTON_ID = id('discover-page-queue-selected-button')
export const E2E_DISCOVER_PAGE_DELETE_SELECTED_BUTTON_ID = id('discover-page-delete-selected-button')
export const E2E_DISCOVER_ALBUM_PLAY_BUTTON = 'discover-album-play-button'
export const E2E_DISCOVER_ALBUM_QUEUE_BUTTON = 'discover-album-queue-button'
export const E2E_DISCOVER_ALBUM_TITLE = 'discover-album-title'
export const E2E_DISCOVER_ALBUM_ARTIST = 'discover-album-artist'

// SHARE PAGE

export const E2E_SHARE_PAGE_ID = id('share-page')

export const E2E_SHARE_DROP_ZONE_ID = id('share-input')
export const E2E_PROCESSING_SCREEN_ID = id('share-processing-screen')
export const E2E_SHARE_FORM_ID = id('share-form')

// SHARE FORM ELEMENTS

export const E2E_SHARE_FORM_TRACKLIST_ID = id('share-form-tracklist')

export const E2E_SHARE_FORM_COVER_INPUT_ID = id('share-form-cover-input')
export const E2E_SHARE_FORM_COVER_LABEL_ID = id('share-form-cover-label')

export const E2E_SHARE_FORM_TITLE_INPUT_ID = id('share-form-title-input')
export const E2E_SHARE_FORM_ARTIST_INPUT_ID = id('share-form-artist-input')
export const E2E_SHARE_FORM_ADD_TRACK_INPUT_ID = id('share-form-add-track-input')

export const E2E_SHARE_FORM_MOVE_TRACK_UP = 'share-form-move-track-up'
export const E2E_SHARE_FORM_MOVE_TRACK_DOWN = 'share-form-move-track-down'
export const E2E_SHARE_FORM_REMOVE_TRACK = 'share-form-remove-track'

export const E2E_SHARE_FORM_CANCEL_BUTTON_ID = id('share-form-cancel-button')
export const E2E_SHARE_FORM_SAVE_BUTTON_ID = id('share-form-save-button')
export const E2E_SHARE_FORM_RESET_BUTTON_ID = id('share-form-reset-button')

// PLAYLIST ELEMENTS

export const E2E_PLAYLIST_TRAKLIST_ID = id('playlist-tracklist')
export const E2E_PLAYLIST_CLEAR_BUTTON_ID = id('playlist-clear-button')

// PLAYER ELEMENTS

export const E2E_PLAYER_ACTIVE_ID = id('player-active')

export const E2E_PLAYER_PENDING_ID = id('player-pending')
