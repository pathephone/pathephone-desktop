import { creatorFactory as cf } from '../utils/reduxTools'

// APP LIFECYCLE

export const initApp = cf('INIT_APP')

export const reportInitAppError = cf('REPORT_INIT_APP_ERROR')

export const reportInitAppSuccess = cf('REPORT_INIT_APP_SUCCESS')

export const closeApp = cf('CLOSE_APP')

// PLAYBACK

export const pause = cf('PAUSE')

export const resume = cf('RESUME')

export const changeVolume = cf('CHANGE_VOLUME')

export const turnOnRepeat = cf('TURN_ON_REPEAT')

export const turnOffRepeat = cf('TURN_OFF_REPEAT')

export const turnOnShuffle = cf('TURN_ON_SHUFFLE')

export const turnOffShuffle = cf('TURN_OFF_SHUFFLE')

export const startSeeking = cf('START_SEEKING')

export const stopSeeking = cf('STOP_SEEKING')

export const updateBufferedMap = cf('UPDATE_BUFFERED_MAP')

// PLAYLIST

export const playPlaylistTrack = cf('PLAY_PLAYLIST_TRACK')

export const playNextPlaylistTrack = cf('PLAY_NEXT_PLAYLIST_TRACK')

export const playPreviousPlaylistTrack = cf('PLAY_PREVIOUS_PLAYLIST_TRACK')

export const addTracksToPlaylist = cf('ADD_TRACKS_TO_PLAYLIST')

export const removeTrackFromPlaylist = cf('REMOVE_TRACK_FROM_PLAYLIST')

export const clearPlaylist = cf('CLEAR_PLAYLIST')

export const markTrackAsDownloaded = cf('MARK_TRACK_AS_DOWNLOADED')

// ALBUMS

export const playAlbum = cf('PLAY_ALBUM')

export const addAlbumToPlaylist = cf('ADD_ALBUM_TO_PLAYLIST')

// ALBUMS PAGE

export const changeAlbumsPageSearchValue = cf('CHANGE_ALBUMS_PAGE_SEARCH_VALUE')

export const clearAlbumsPageSearchValue = cf('CLEAR_ALBUMS_PAGE_SEARCH_VALUE')

export const selectAlbumsPageAlbum = cf('SELECT_ALBUMS_PAGE_ALBUM')
