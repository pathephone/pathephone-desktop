import { newCreatorFactory, newDomainTypeFactory } from '~utils/reduxTools'

const c = newCreatorFactory(newDomainTypeFactory('system'))

export const systemAppStartProceed = c('APP_START_PROCEED')
export const systemAppStartSucceed = c('APP_START_SUCCEED')
export const systemAppStartFailed = c('APP_START_FAILED')

export const systemAudioLoadProceed = c('AUDIO_LOAD_PROCEED')
export const systemAudioLoadFailed = c('AUDIO_LOAD_FAILED')
export const systemAudioReadyToPlay = c('AUDIO_LOAD_PROCEED')

export const systemAudioTimingChanged = c('AUDIO_TIMING_CHANGED')
export const systemAudioBufferingProceed = c('AUDIO_BUFFERING_PROCEED')
export const systemAudioDurationRecieved = c('AUDIO_DURATION_RECIEVED')
export const systemAudioPlaybackEnded = c('AUDIO_PLAYBACK_ENDED')

export const systemPlaylistAlbumTracksRecieved = c('PLAYLIST_ALBUM_TRACKS_RECIEVED')

export const systemAlbumPublished = c('ALBUM_PUBLISHED')
export const systemAlbumCandidateRecieved = c('ALBUM_CANDIDATE_RECIEVED')
export const systemAlbumUpdated = c('ALBUM_UPDATED')
export const systemAlbumSaved = c('ALBUM_SAVED')

export const systemAlbumFormDataNormalized = c('ALBUM_FORM_DATA_NORMALIZED')

export const systemFeedAlbumsRecieved = c('FEED_ALBUMS_RECIEVED')

export const systemDndStartDetected = c('DND_START_DETECTED')
export const systemDndEndDetected = c('DND_END_DETECTED')
export const systemDndDropDetected = c('DND_DROP_DETECTED')
