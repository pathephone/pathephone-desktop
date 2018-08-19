export const IPFS_START = 'ipfs-start';
export const IPFS_START_FAILED = 'ipfs-start-failed';
export const IPFS_START_SUCCEED = 'ipfs-start-succeed';

export const IPFS_GET_INFO = 'ipfs-get-info';

export const IPFS_SHARE_OBJECT = 'ipfs-share-object';
export const IPFS_SHARE_FS_FILE = 'ipfs-share-fs-file';

export const IPFS_CACHE_CIDS = 'ipfs-cache-cids';
export const IPFS_CID_CACHE_SUCCEED = 'ipfs-cid-cache-succeed';
export const IPFS_CID_CACHE_FAILED = 'ipfs-cid-cache-failed';
export const IPFS_OPEN_CACHED_CIDS_STREAM = 'open-cached-cids-stream';
export const IPFS_GET_STATS = 'ipfs-get-repo-stats';

export const METABIN_GATE_START = 'metabin-gate-start';
export const METABIN_GATE_SEND_EACH = 'metabin-gate-send-each';
export const METABIN_GATE_SUBSCRIBE = 'metabin-gate-subscribe';
export const METABIN_GATE_UNSUBSCRIBE = 'metabin-gate-unlisten';
export const METABIN_GATE_DATA_RECIEVED = 'metabin-gate-data-recieved';
export const METABIN_GET_RECIEVED_DATA_CACHE = 'metabin-get-recieved-data-cache';
export const METABIN_GET_PEERS_COUNT = 'metabin-get-peers-count';

export const SPLIT_FOLDERS_AND_FILES = 'split-folders-and-files';
export const CHECK_FS_FILE_IS_AUDIO = 'check-fs-file-is-audio';
export const CHECK_FS_FILE_IS_IMAGE = 'check-fs-file-is-image';
export const GET_FOLDER_CONTENTS = 'get-folder-contents';
export const READ_AUDIO_METADATA = 'read-audio-metadata';
export const FILTER_FS_FILES_BY_MIME = 'filter-fs-files-by-mime';
export const GET_ALBUM_CANDIDATES_FROM_FS_ITEMS = 'get-album-candidates-from-fs-items';
export const GET_TRACKS_FROM_FS_FILES = 'get-tracks-from-fs-files';

// WORKERS

export const START_DB = 'start-db';
export const GET_ALBUMS_COLLECTION_INFO = 'get-albums-collection-info';
export const FIND_ALBUM_IN_COLLECTION_BY_CID = 'find-album-in-collection-by-cid';
export const FIND_ALBUMS_IN_COLLECTION_BY_CIDS = 'find-album-in-collection-by-cids';
export const FIND_OUTDATED_ALBUMS_IN_COLLECTION = 'find-outdated-albums-in-collection';
export const DELETE_ALBUMS_IN_COLLECTION_BY_CIDS = 'delete-albums-in-collection-by-cids';

export const OPEN_ALBUMS_STREAM = 'open-albums-stream';
export const CLOSE_ALBUMS_STREAM = 'close-albums-stream';
export const ALBUMS_STREAMED = 'albums-streamed';

export const SAVE_ALBUM_IF_NOT_EXISTS = 'save-album-if-not-exists';
export const SAVE_OR_UPDATE_ALBUM = 'save-or-update-album';
export const SAVE_OR_UPDATE_ALBUMS = 'save-or-update-albums';
