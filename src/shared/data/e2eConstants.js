import { IS_RENDERER } from '../config'

const id = (id) => {
  if (IS_RENDERER) {
    return id
  }
  return `#${id}`
}

export const E2E_READY_SCREEN_ID = id('ready-app')
export const E2E_NOTIFICATIONS_CONTAINER_ID = id('notifications-container')

// NAVIGATION

export const E2E_NAV_DISCOVER_LINK_ID = id('nav-discover-link')
export const E2E_NAV_SHARE_LINK_ID = id('nav-share-album-link')

// DISCOVER FEED

export const E2E_DISCOVER_PAGE_ID = id('discover-page')
export const E2E_DISCOVER_FEED_ID = id('discover-feed')

// SHARE PAGE

export const E2E_SHARE_PAGE_ID = id('share-page')

export const E2E_SHARE_DROP_ZONE_ID = id('share-input')
export const E2E_SHARE_PROCESSING_SCREEN_ID = id('share-processing-screen')
export const E2E_SHARE_FORM_ID = id('share-form')

// SHARE FORM ELEMENTS

export const E2E_SHARE_FORM_TRACKLIST_ID = id('share-form-tracklist')

export const E2E_SHARE_FORM_COVER_INPUT_ID = id('share-form-cover-input')
export const E2E_SHARE_FORM_COVER_LABEL_ID = id('share-form-cover-label')
export const E2E_SHARE_FORM_COVER_PREVIEW_ID = id('share-form-cover-preview')

export const E2E_SHARE_FORM_TITLE_INPUT_ID = id('share-form-title-input')
export const E2E_SHARE_FORM_ARTIST_INPUT_ID = id('share-form-artist-input')
export const E2E_SHARE_FORM_ADD_TRACK_INPUT_ID = id('share-form-add-track-input')

export const E2E_SHARE_FORM_MOVE_TRACK_UP = 'share-form-move-track-up'
export const E2E_SHARE_FORM_MOVE_TRACK_DOWN = 'share-form-move-track-down'
export const E2E_SHARE_FORM_REMOVE_TRACK = 'share-form-remove-track'

export const E2E_SHARE_FORM_CANCEL_BUTTON_ID = id('share-form-cancel-button')
export const E2E_SHARE_FORM_SAVE_BUTTON_ID = id('share-form-save-button')
export const E2E_SHARE_FORM_RESET_BUTTON_ID = id('share-form-reset-button')
