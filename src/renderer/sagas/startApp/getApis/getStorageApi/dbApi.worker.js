import {
  IPC_START_DB,
  IPC_OPEN_ALBUMS_STREAM,
  IPC_FIND_ALBUM_IN_COLLECTION_BY_CID,
  IPC_FIND_ALBUMS_IN_COLLECTION_BY_CIDS,
  IPC_SAVE_ALBUM_IF_NOT_EXISTS,
  IPC_SAVE_OR_UPDATE_ALBUM,
  IPC_DELETE_ALBUMS_IN_COLLECTION_BY_CIDS,
  IPC_FIND_OUTDATED_ALBUMS_IN_COLLECTION,
  IPC_CLOSE_ALBUMS_STREAM,
  IPC_GET_ALBUMS_COLLECTION_INFO,
  IPC_SAVE_OR_UPDATE_ALBUMS,
} from '~data/ipcTypes';

import createWorkerReducer from '~utils/createWorkerReducer';

import startDb from './dbApi.worker/startDb';

import {
  openAlbumsStream,
  findAlbumInCollectionByCid,
  findAlbumsInCollectionByCids,
  saveAlbumIfNotExists,
  saveOrUpdateAlbum,
  findOutdatedAlbumsInCollection,
  closeAlbumsStream,
  deleteAlbumsFromCollection,
  getAlbumsCollectionInfo,
  saveOrUpdateAlbums,
} from './dbApi.worker/albumsCollectionApi';

let dbApi;

const messageHandler = async ({ type, payload }) => {
  switch (type) {
    case IPC_START_DB:
      dbApi = await startDb(payload);
      return;
    case IPC_GET_ALBUMS_COLLECTION_INFO:
      return getAlbumsCollectionInfo(dbApi);
    case IPC_OPEN_ALBUMS_STREAM:
      return openAlbumsStream(dbApi, payload);
    case IPC_CLOSE_ALBUMS_STREAM:
      return closeAlbumsStream(dbApi, payload);
    case IPC_FIND_ALBUM_IN_COLLECTION_BY_CID:
      return findAlbumInCollectionByCid(dbApi, payload);
    case IPC_FIND_ALBUMS_IN_COLLECTION_BY_CIDS:
      return findAlbumsInCollectionByCids(dbApi, payload);
    case IPC_SAVE_ALBUM_IF_NOT_EXISTS:
      return saveAlbumIfNotExists(dbApi, payload);
    case IPC_SAVE_OR_UPDATE_ALBUM:
      return saveOrUpdateAlbum(dbApi, payload);
    case IPC_SAVE_OR_UPDATE_ALBUMS:
      return saveOrUpdateAlbums(dbApi, payload);
    case IPC_DELETE_ALBUMS_IN_COLLECTION_BY_CIDS:
      return deleteAlbumsFromCollection(dbApi, payload);
    case IPC_FIND_OUTDATED_ALBUMS_IN_COLLECTION:
      return findOutdatedAlbumsInCollection(dbApi, payload);
    default:
      throw new Error('dbApi.worker: Unknown message type.');
  }
};

createWorkerReducer(messageHandler);
