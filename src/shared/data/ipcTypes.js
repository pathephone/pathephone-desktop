export const IPC_IPFS_START = 'ipfs-start'
export const IPC_IPFS_START_FAILED = 'ipfs-start-failed'
export const IPC_IPFS_START_SUCCEED = 'ipfs-start-succeed'

export const IPC_IPFS_GET_INFO = 'ipfs-get-info'

export const IPC_IPFS_SHARE_OBJECT = 'ipfs-share-object'
export const IPC_IPFS_SHARE_FS_FILE = 'ipfs-share-fs-file'

export const IPC_IPFS_CACHE_CIDS = 'ipfs-cache-cids'
export const IPC_IPFS_CID_CACHE_SUCCEED = 'ipfs-cid-cache-succeed'
export const IPC_IPFS_CID_CACHE_FAILED = 'ipfs-cid-cache-failed'
export const IPC_IPFS_OPEN_CACHED_CIDS_STREAM = 'open-cached-cids-stream'
export const IPC_IPFS_GET_STATS = 'ipfs-get-repo-stats'

export const IPC_METABIN_GATE_START = 'metabin-gate-start'
export const IPC_METABIN_GATE_SEND_EACH = 'metabin-gate-send-each'
export const IPC_METABIN_GATE_SUBSCRIBE = 'metabin-gate-subscribe'
export const IPC_METABIN_GATE_UNSUBSCRIBE = 'metabin-gate-unlisten'
export const IPC_METABIN_GATE_DATA_RECIEVED = 'metabin-gate-data-recieved'
export const IPC_METABIN_GET_RECIEVED_DATA_CACHE = 'metabin-get-recieved-data-cache'
export const IPC_METABIN_GET_PEERS_COUNT = 'metabin-get-peers-count'

export const IPC_SPLIT_FOLDERS_AND_FILES = 'split-folders-and-files'
export const IPC_CHECK_FS_FILE_IS_AUDIO = 'check-fs-file-is-audio'
export const IPC_CHECK_FS_FILE_IS_IMAGE = 'check-fs-file-is-image'
export const IPC_GET_FOLDER_CONTENTS = 'get-folder-contents'
export const IPC_READ_AUDIO_METADATA = 'read-audio-metadata'
export const IPC_FILTER_FS_FILES_BY_MIME = 'filter-fs-files-by-mime'
export const IPC_GET_ALBUM_CANDIDATES_FROM_FS_ITEMS = 'get-album-candidates-from-fs-items'
export const IPC_GET_TRACKS_FROM_FS_FILES = 'get-tracks-from-fs-files'

// WORKERS

export const IPC_START_DB = 'start-db'
export const IPC_GET_ALBUMS_COLLECTION_INFO = 'get-albums-collection-info'
export const IPC_FIND_ALBUM_IN_COLLECTION_BY_CID = 'find-album-in-collection-by-cid'
export const IPC_FIND_ALBUMS_IN_COLLECTION_BY_CIDS = 'find-album-in-collection-by-cids'
export const IPC_FIND_OUTDATED_ALBUMS_IN_COLLECTION = 'find-outdated-albums-in-collection'
export const IPC_DELETE_ALBUMS_IN_COLLECTION_BY_CIDS = 'delete-albums-in-collection-by-cids'

export const IPC_OPEN_ALBUMS_STREAM = 'open-albums-stream'
export const IPC_CLOSE_ALBUMS_STREAM = 'close-albums-stream'
export const IPC_ALBUMS_STREAMED = 'albums-streamed'

export const IPC_SAVE_ALBUM_IF_NOT_EXISTS = 'save-album-if-not-exists'
export const IPC_SAVE_OR_UPDATE_ALBUM = 'save-or-update-album'
export const IPC_SAVE_OR_UPDATE_ALBUMS = 'save-or-update-albums'
