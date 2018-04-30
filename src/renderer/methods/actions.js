import { creatorFactory as cf } from '~utils/reduxTools'

// APP

export const reportAppError = cf('REPORT_APP_ERROR')

export const reportAppReady = cf('REPORT_APP_READY')

export const reportAppProgress = cf('REPORT_APP_PROGRESS')

export const initAppClose = cf('INIT_APP_CLOSE')

// PLAYER

export const pause = cf('PAUSE')

export const resume = cf('RESUME')

export const toggleRepeat = cf('TOGGLE_REPEAT')
// export const turnOnRepeat = cf('TURN_ON_REPEAT')
// export const turnOffRepeat = cf('TURN_OFF_REPEAT')

export const toggleShuffle = cf('TOGGLE_SHUFFLE')
// export const turnOnShuffle = cf('TURN_ON_SHUFFLE')
// export const turnOffShuffle = cf('TURN_OFF_SHUFFLE')

export const startSeeking = cf('START_SEEKING')

export const stopSeeking = cf('STOP_SEEKING')

// PLAYLIST

export const playPlaylistTrack = cf('PLAY_PLAYLIST_TRACK')

export const playNextPlaylistTrack = cf('PLAY_NEXT_PLAYLIST_TRACK')

export const playPreviousPlaylistTrack = cf('PLAY_PREVIOUS_PLAYLIST_TRACK')

export const addTracksToPlaylist = cf('ADD_TRACKS_TO_PLAYLIST')

export const removeTrackFromPlaylist = cf('REMOVE_TRACK_FROM_PLAYLIST')

export const clearPlaylist = cf('CLEAR_PLAYLIST')

export const markTrackAsDownloaded = cf('MARK_TRACK_AS_DOWNLOADED')

// ALBUMS

export const prependAlbumsToBrowse = cf('PREPEND_ALBUMS_TO_BROWSE')

export const appendAlbumsToBrowse = cf('PUSH_ALBUMS_TO_BROWSE')

export const playAlbum = cf('PLAY_ALBUM')

export const addAlbumToPlaylist = cf('ADD_ALBUM_TO_PLAYLIST')

// ALBUMS PAGE

export const changeAlbumsPageSearchValue = cf('CHANGE_ALBUMS_PAGE_SEARCH_VALUE')

export const clearAlbumsPageSearchValue = cf('CLEAR_ALBUMS_PAGE_SEARCH_VALUE')

export const selectAlbumsPageAlbum = cf('SELECT_ALBUMS_PAGE_ALBUM')

export const deselectAlbumsPageAlbum = cf('DESELECT_ALBUMS_PAGE_ALBUM')

// AUDIO

export const initAudioPause = cf('AUDIO_PAUSE')

export const initAudioResume = cf('AUDIO_RESUME')

export const initAudioSourceChange = cf('AUDIO_SOURCE_CHANGE')

export const initAudioVolumeChange = cf('AUDIO_VOLUME_CHANGE')

export const reportAudioLoadStart = cf('AUDIO_LOAD_START')

export const reportAudioReadyToPlay = cf('AUDIO_READY_TO_PLAY')

export const reportAudioLoadProgress = cf('AUDIO_LOAD_PROGRESS')

export const reportAudioPlaybackEnd = cf('AUDIO_PLAYBACK_END')

export const reportAudioPlaybackTimeUpdate = cf('AUDIO_PLAYBACK_TIME_UPDATE')

export const reportAudioDurationUpdate = cf('AUDIO_DURATION_UPDATE')
