import { IGithubRelease } from '~renderer/types/api';
import { IActionCreator, systemAction } from '~renderer/utils/actions';

export const systemAppRootMounted: IActionCreator = systemAction('APP_ROOT_MOUNTED');
export const systemAppStartProceed: IActionCreator = systemAction('APP_START_PROCEED');
export const systemAppStartSucceed: IActionCreator = systemAction('APP_START_SUCCEED');
export const systemAppStartFailed: IActionCreator = systemAction('APP_START_FAILED');

export const systemAudioLoadStarted: IActionCreator = systemAction('AUDIO_LOAD_STARTED');
export const systemAudioLoadProceed: IActionCreator = systemAction('AUDIO_LOAD_PROCEED');
export const systemAudioLoadFailed: IActionCreator = systemAction('AUDIO_LOAD_FAILED');

export const systemAudioTimingChanged: IActionCreator = systemAction('AUDIO_TIMING_CHANGED');
export const systemAudioBufferingProceed: IActionCreator = systemAction('AUDIO_BUFFERING_PROCEED');
export const systemAudioDurationRecieved: IActionCreator = systemAction('AUDIO_DURATION_RECIEVED');
export const systemAudioEnded: IActionCreator = systemAction('AUDIO_PLAYBACK_ENDED');
export const systemAudioReadyToPlay: IActionCreator = systemAction('AUDIO_READY_TO_PLAY');
export const systemAudioPlayed: IActionCreator = systemAction('AUDIO_PLAYED');
export const systemAudioPaused: IActionCreator = systemAction('AUDIO_PAUSED');

export const systemAlbumPublished: IActionCreator = systemAction('ALBUM_PUBLISHED');
export const systemAlbumCandidateRecieved: IActionCreator = systemAction('ALBUM_CANDIDATE_RECIEVED');
export const systemAlbumUpdated: IActionCreator = systemAction('ALBUM_UPDATED');
export const systemAlbumSaved: IActionCreator = systemAction('ALBUM_SAVED');

export const systemShareFilesProcessingFailed: IActionCreator = systemAction('SHARE_FILES_PROCESSING_FAILED');
export const systemShareFormChanged: IActionCreator = systemAction('SHARE_FORM_CHANGED');
export const systemShareFormValidated: IActionCreator = systemAction('SHARE_FORM_VALIDATED');
export const systemShareCandidatesRecieved: IActionCreator = systemAction('SHARE_CANDIDATES_RECIEVED');
export const systemShareCandidateSaveSucceed: IActionCreator = systemAction('SHARE_CANDIDATE_SAVE_SUCCEED');
export const systemShareCandidateSaveFailed: IActionCreator = systemAction('SHARE_CANDIDATE_SAVE_FAILED');
export const systemShareCandidatesNotFound: IActionCreator = systemAction('SHARE_CANDIDATES_NOT_FOUND');

export const systemDiscoverAlbumsFetch: IActionCreator = systemAction('DISCOVER_FETCH_SUCCEED');
export const systemDiscoverAlbumsFetchSucceed: IActionCreator = systemAction('DISCOVER_LATEST_FETCH_SUCCEED');
export const systemDiscoverAlbumsFetchFailed: IActionCreator = systemAction('DISCOVER_LATEST_FETCH_FAILED');
export const systemDiscoverSelectedActionSucceed: IActionCreator = systemAction('DISCOVER_SELECTED_ACTION_SUCCEED');
export const systemDiscoverSelectedActionFailed: IActionCreator = systemAction('DISCOVER_SELECTED_ACTION_FAILED');

export const systemAlbumDeleteSucceed: IActionCreator = systemAction('ALBUMS_DELETE_SUCCEED');
export const systemAlbumDeleteFailed: IActionCreator = systemAction('ALBUMS_DELETE_FAILED');

export const systemUiLocked: IActionCreator = systemAction('UI_LOCKED');
export const systemUiUnlocked: IActionCreator = systemAction('UI_UNLOCKED');

export const systemPlaylistCleared: IActionCreator = systemAction('PLAYLIST_CLEARED');

export const systemPlayedTracksRecieved: IActionCreator = systemAction('PLAYED_TRACKS_RECIEVED');
export const systemQueuedTracksRecieved: IActionCreator = systemAction('QUEUED_TRACKS_RECIEVED');

export const systemIPFSFileCached: IActionCreator = systemAction('IPFS_FILE_CACHED');

export const systemRepeatedPlaylistEnded: IActionCreator = systemAction('REPEATED_PLAYLIST_ENDED');

export const systemNotificationRecieved: IActionCreator = systemAction('NOTIFICATION_RECIEVED');
export const systemNotificationExpired: IActionCreator = systemAction('NOTIFICATION_EXPIRED');

export const systemIpfsInfoRecieved: IActionCreator = systemAction('IPFS_INFO_RECIEVED');
export const systemIpfsPeersRecieved: IActionCreator = systemAction('IPFS_PEERS_RECIEVED');
export const systemIpfsStatsRecieved: IActionCreator = systemAction('IPFS_REPO_STATS_RECIEVED');

export const systemMetabinPeersRecieved: IActionCreator = systemAction('METABIN_PEERS_RECIEVED');

export const systemAlbumsCollectionInfoRecieved: IActionCreator = systemAction('ALBUMS_COUNT_RECIEVED');
export const systemAlbumsRecievedCacheTransited: IActionCreator = systemAction('RECIEVED_CACHE_TRANSITED');

export const systemNewRelaseDetected: IActionCreator<IGithubRelease> = systemAction<IGithubRelease>('NEW_RELEASE_DETECTED');
