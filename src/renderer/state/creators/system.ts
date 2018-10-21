import { IGithubRelease, ICollectionStat, IIpfsInfo } from '~renderer/types/api';
import { createStandardAction } from 'typesafe-actions';
import { INotification } from '~renderer/ui/Notifications/types';
import { IPlaylistTrack } from '~renderer/state/domains/playlist/types';
import { IMetabinAlbum } from '~shared/types/domains/album';

export const systemAppRootMounted = createStandardAction('APP_ROOT_MOUNTED')();
export const systemAppStartProceed = createStandardAction('APP_START_PROCEED')<number>();
export const systemAppStartSucceed = createStandardAction('APP_START_SUCCEED')();
export const systemAppStartFailed = createStandardAction(
  'APP_START_FAILED'
)<string>();

export const systemShareFilesProcessingFailed = createStandardAction('SHARE_FILES_PROCESSING_FAILED')();
export const systemShareFormChanged = createStandardAction(
  'SHARE_FORM_CHANGED'
)<IMetabinAlbum>();
export const systemShareCandidatesRecieved = createStandardAction(
  'SHARE_CANDIDATES_RECIEVED'
)<IMetabinAlbum[]>();
export const systemShareCandidateSaveSucceed = createStandardAction('SHARE_CANDIDATE_SAVE_SUCCEED')();
export const systemShareCandidateSaveFailed = createStandardAction('SHARE_CANDIDATE_SAVE_FAILED')();
export const systemShareCandidatesNotFound = createStandardAction('SHARE_CANDIDATES_NOT_FOUND')();

export const systemUiLocked = createStandardAction('UI_LOCKED')();
export const systemUiUnlocked = createStandardAction('UI_UNLOCKED')();

export const systemPlayedTracksRecieved = createStandardAction(
  'PLAYED_TRACKS_RECIEVED'
)<IPlaylistTrack[]>();
export const systemQueuedTracksRecieved = createStandardAction(
  'QUEUED_TRACKS_RECIEVED'
)<IPlaylistTrack[]>();

export const systemIPFSFileCached = createStandardAction('IPFS_FILE_CACHED')();

export const systemNotificationRecieved = createStandardAction('NOTIFICATION_RECIEVED')<INotification>();

export const systemIpfsInfoRecieved = createStandardAction(
  'IPFS_INFO_RECIEVED'
)<{ ipfsInfo: IIpfsInfo; isOffline: boolean }>();
export const systemIpfsStatsRecieved = createStandardAction('IPFS_REPO_STATS_RECIEVED')();

export const systemMetabinPeersRecieved = createStandardAction('METABIN_PEERS_RECIEVED')<number | null>();

export const systemAlbumsCollectionInfoRecieved = createStandardAction(
  'ALBUMS_COUNT_RECIEVED'
)<ICollectionStat>();
export const systemAlbumsRecievedCacheTransited = createStandardAction('RECIEVED_CACHE_TRANSITED')();

export const systemNewRelaseDetected = createStandardAction('NEW_RELEASE_DETECTED')<IGithubRelease>();
