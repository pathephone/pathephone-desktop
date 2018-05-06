import { newCreatorFactory, newDomainTypeFactory } from '~utils/reduxTools'

const c = newCreatorFactory(newDomainTypeFactory('ui'))

export const uiAlbumPlayed = c('ALBUM_PLAYED')
export const uiAlbumAddedToPlaylist = c('ALBUM_ADDED_TO_PLAYLIST')

export const uiPlaylistTrackPlayed = c('PLAYLIST_TRACK_PLAYED')
export const uiPlaylistTrackRemoved = c('PLAYLIST_TRACK_REMOVED')
export const uiPlaylistCleared = c('PLAYLIST_CLEARED')

export const uiRepeatToggled = c('REPEAT_TOGGLED')
export const uiPauseToggled = c('PAUSE_TOGGLED')
export const uiShuffleToggled = c('SHUFFLE_TOGGLED')

export const uiAlbumsSearchPerformed = c('ALBUMS_SEARCH_PERFORMED')
export const uiAlbumsSearchCleared = c('ALBUMS_SEARCH_CLEARED')

export const uiAlbumSelected = c('ALBUM_SELECTED')
export const uiAlbumDeselected = c('ALBUM_DESELECTED')

export const uiSeekStarted = c('SEEK_PERFORMED')
export const uiSeekStoped = c('SEEK_STOPED')

export const uiAlbumFormSubmited = c('ALBUM_FORM_SUBMITED')

export const uiVolumeChanged = c('VOLUME_CHANGED')

export const uiAppClosed = c('APP_CLOSED')
