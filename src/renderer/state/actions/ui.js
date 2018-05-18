import { newCreatorFactory, newDomainTypeFactory } from '~utils/reduxTools'

const c = newCreatorFactory(newDomainTypeFactory('ui'))

export const uiAlbumPlayed = c('ALBUM_PLAYED')
export const uiAlbumQueued = c('ALBUM_ADDED_TO_PLAYLIST')
export const uiAlbumDeleted = c('ALBUMS_DELETED')

export const uiPlaylistTrackPlayed = c('PLAYLIST_TRACK_PLAYED')
export const uiPlaylistTrackRemoved = c('PLAYLIST_TRACK_REMOVED')
export const uiPlaylistCleared = c('PLAYLIST_CLEARED')

export const uiRepeatToggled = c('REPEAT_TOGGLED')
export const uiPauseToggled = c('PAUSE_TOGGLED')
export const uiShuffleToggled = c('SHUFFLE_TOGGLED')

export const uiDiscoverSearchPerformed = c('ALBUMS_SEARCH_PERFORMED')
export const uiDiscoverSearchCleared = c('ALBUMS_SEARCH_CLEARED')

export const uiDiscoverAlbumSelected = c('ALBUM_SELECTED')
export const uiDiscoverAlbumDeselected = c('ALBUM_DESELECTED')

export const uiDiscoverAlbumsRequested = c('MORE_DISCOVER_ALBUMS_REQUESTED')
export const uiDiscoverSelectedQueued = c('DISCOVER_SELECTED_ADDED_TO_PLAYLIST')
export const uiDiscoverSelectedPlayed = c('DISCOVER_SELECTED_PLAYED')
export const uiDiscoverSelectedDeleted = c('DISCOVER_SELECTED_DELETED')
export const uiDiscoverSelectedCanceled = c('FEED_SELECTION_CANCELED')

export const uiSeekStarted = c('SEEK_PERFORMED')
export const uiSeekStoped = c('SEEK_STOPED')

export const uiAlbumFormSubmited = c('ALBUM_FORM_SUBMITED')

export const uiVolumeChanged = c('VOLUME_CHANGED')

export const uiAppClosed = c('APP_CLOSED')

export const uiShareFilesSelected = c('ALBUM_FILES_SELECTED')
