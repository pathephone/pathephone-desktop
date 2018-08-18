import ipc from '~shared/data/ipc';

import createWorkerReducer from '~shared/utils/createWorkerReducer';

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
    case ipc.START_DB:
      dbApi = await startDb(payload);
      return undefined;
    case ipc.GET_ALBUMS_COLLECTION_INFO:
      return getAlbumsCollectionInfo(dbApi);
    case ipc.OPEN_ALBUMS_STREAM:
      return openAlbumsStream(dbApi, payload);
    case ipc.CLOSE_ALBUMS_STREAM:
      return closeAlbumsStream(dbApi, payload);
    case ipc.FIND_ALBUM_IN_COLLECTION_BY_CID:
      return findAlbumInCollectionByCid(dbApi, payload);
    case ipc.FIND_ALBUMS_IN_COLLECTION_BY_CIDS:
      return findAlbumsInCollectionByCids(dbApi, payload);
    case ipc.SAVE_ALBUM_IF_NOT_EXISTS:
      return saveAlbumIfNotExists(dbApi, payload);
    case ipc.SAVE_OR_UPDATE_ALBUM:
      return saveOrUpdateAlbum(dbApi, payload);
    case ipc.SAVE_OR_UPDATE_ALBUMS:
      return saveOrUpdateAlbums(dbApi, payload);
    case ipc.DELETE_ALBUMS_IN_COLLECTION_BY_CIDS:
      return deleteAlbumsFromCollection(dbApi, payload);
    case ipc.FIND_OUTDATED_ALBUMS_IN_COLLECTION:
      return findOutdatedAlbumsInCollection(dbApi, payload);
    default:
      throw new Error('dbApi.worker: Unknown message type.');
  }
};

createWorkerReducer(messageHandler);
