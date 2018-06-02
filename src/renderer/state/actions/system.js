import { newCreatorFactory, newDomainTypeFactory } from '~utils/reduxTools'

const c = newCreatorFactory(newDomainTypeFactory('system'))

export const systemAppStartProceed = c('APP_START_PROCEED')
export const systemAppStartSucceed = c('APP_START_SUCCEED')
export const systemAppStartFailed = c('APP_START_FAILED')

export const systemAudioLoadStarted = c('AUDIO_LOAD_STARTED')
export const systemAudioLoadProceed = c('AUDIO_LOAD_PROCEED')
export const systemAudioLoadFailed = c('AUDIO_LOAD_FAILED')

export const systemAudioTimingChanged = c('AUDIO_TIMING_CHANGED')
export const systemAudioBufferingProceed = c('AUDIO_BUFFERING_PROCEED')
export const systemAudioDurationRecieved = c('AUDIO_DURATION_RECIEVED')
export const systemAudioEnded = c('AUDIO_PLAYBACK_ENDED')
export const systemAudioReadyToPlay = c('AUDIO_READY_TO_PLAY')
export const systemAudioPlayed = c('AUDIO_PLAYED')
export const systemAudioPaused = c('AUDIO_PAUSED')

export const systemAlbumPublished = c('ALBUM_PUBLISHED')
export const systemAlbumCandidateRecieved = c('ALBUM_CANDIDATE_RECIEVED')
export const systemAlbumUpdated = c('ALBUM_UPDATED')
export const systemAlbumSaved = c('ALBUM_SAVED')

export const systemShareFilesProcessed = c('SHARE_FILES_PROCESSED')
export const systemShareFormChanged = c('SHARE_FORM_CHANGED')
export const systemShareCandidatesRecieved = c('SHARE_CANDIDATES_RECIEVED')
export const systemShareCandidateSaveSucceed = c('SHARE_CANDIDATES_SAVE_SUCCEED')
export const systemShareCandidatesSaveFailed = c('SHARE_CANDIDATES_SAVE_FAILED')

export const systemDiscoverAlbumsFetchSucceed = c('DISCOVER_ALBUMS_FETCH_SUCCEED')
export const systemDiscoverSelectedActionSucceed = c('DISCOVER_SELECTED_ACTION_SUCCEED')
export const systemDiscoverSelectedActionFailed = c('DISCOVER_SELECTED_ACTION_FAILED')

export const systemAlbumDeleteSucceed = c('ALBUMS_DELETE_SUCCEED')
export const systemAlbumDeleteFailed = c('ALBUMS_DELETE_FAILED')

export const systemUiLocked = c('UI_LOCKED')
export const systemUiUnlocked = c('UI_UNLOCKED')

export const systemPlaylistCleared = c('PLAYLIST_CLEARED')

export const systemPlayedTracksRecieved = c('PLAYED_TRACKS_RECIEVED')
export const systemQueuedTracksRecieved = c('QUEUED_TRACKS_RECIEVED')

export const systemTrackCached = c('TRACK_CACHED')

export const systemRepeatedPlaylistEnded = c('REPEATED_PLAYLIST_ENDED')
