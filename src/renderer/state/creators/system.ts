import { IGithubRelease } from '~renderer/types/api';
import { IActionCreator, systemAction } from '~renderer/utils/actions';

export const systemAppRootMounted: IActionCreator = systemAction('APP_ROOT_MOUNTED');
export const systemAppStartProceed: IActionCreator = systemAction('APP_START_PROCEED');
export const systemAppStartSucceed: IActionCreator = systemAction('APP_START_SUCCEED');
export const systemAppStartFailed: IActionCreator = systemAction('APP_START_FAILED');

export const systemShareFilesProcessingFailed: IActionCreator = systemAction('SHARE_FILES_PROCESSING_FAILED');
export const systemShareFormChanged: IActionCreator = systemAction('SHARE_FORM_CHANGED');
export const systemShareCandidatesRecieved: IActionCreator = systemAction('SHARE_CANDIDATES_RECIEVED');
export const systemShareCandidateSaveSucceed: IActionCreator = systemAction('SHARE_CANDIDATE_SAVE_SUCCEED');
export const systemShareCandidateSaveFailed: IActionCreator = systemAction('SHARE_CANDIDATE_SAVE_FAILED');
export const systemShareCandidatesNotFound: IActionCreator = systemAction('SHARE_CANDIDATES_NOT_FOUND');

export const systemUiLocked: IActionCreator = systemAction('UI_LOCKED');
export const systemUiUnlocked: IActionCreator = systemAction('UI_UNLOCKED');

export const systemPlayedTracksRecieved: IActionCreator = systemAction('PLAYED_TRACKS_RECIEVED');
export const systemQueuedTracksRecieved: IActionCreator = systemAction('QUEUED_TRACKS_RECIEVED');

export const systemIPFSFileCached: IActionCreator = systemAction('IPFS_FILE_CACHED');

export const systemNotificationRecieved: IActionCreator = systemAction('NOTIFICATION_RECIEVED');

export const systemIpfsInfoRecieved: IActionCreator = systemAction('IPFS_INFO_RECIEVED');
export const systemIpfsStatsRecieved: IActionCreator = systemAction('IPFS_REPO_STATS_RECIEVED');

export const systemMetabinPeersRecieved: IActionCreator = systemAction('METABIN_PEERS_RECIEVED');

export const systemAlbumsCollectionInfoRecieved: IActionCreator = systemAction('ALBUMS_COUNT_RECIEVED');
export const systemAlbumsRecievedCacheTransited: IActionCreator = systemAction('RECIEVED_CACHE_TRANSITED');

export const systemNewRelaseDetected: IActionCreator<IGithubRelease> = systemAction<IGithubRelease>('NEW_RELEASE_DETECTED');
