import { eventChannel } from 'redux-saga';

import {
  IPC_FIND_ALBUM_IN_COLLECTION_BY_CID,
  IPC_FIND_ALBUMS_IN_COLLECTION_BY_CIDS,
  IPC_DELETE_ALBUMS_IN_COLLECTION_BY_CIDS,
  IPC_FIND_OUTDATED_ALBUMS_IN_COLLECTION,
  IPC_OPEN_ALBUMS_STREAM,
  IPC_SAVE_ALBUM_IF_NOT_EXISTS,
  IPC_SAVE_OR_UPDATE_ALBUM,
  IPC_ALBUMS_STREAMED,
  IPC_CLOSE_ALBUMS_STREAM,
  IPC_GET_ALBUMS_COLLECTION_INFO,
  IPC_SAVE_OR_UPDATE_ALBUMS,
} from '~data/ipcTypes';

const getAlbumsCollectionApi = (worker) => {
  const getAlbumsCollectionInfo = () => worker.call({
    type: IPC_GET_ALBUMS_COLLECTION_INFO,
  });
  const findAlbumInCollectionByCid = cid => worker.call({
    type: IPC_FIND_ALBUM_IN_COLLECTION_BY_CID,
    payload: cid,
  });
  const findAlbumsInCollectionByCids = cids => worker.call({
    type: IPC_FIND_ALBUMS_IN_COLLECTION_BY_CIDS,
    payload: cids,
  });

  const findOutdatedAlbumsInCollection = period => worker.call({
    type: IPC_FIND_OUTDATED_ALBUMS_IN_COLLECTION,
    payload: period,
  });

  const findAlbumsInCollection = async (payload) => {
    await worker.call({
      type: IPC_OPEN_ALBUMS_STREAM,
      payload,
    });
    return eventChannel((emitt) => {
      const handleMessage = ({ data }) => {
        const { type, payload: messagePayload, errorMessage } = data;
        if (type === IPC_ALBUMS_STREAMED) {
          if (errorMessage) {
            emitt({
              error: new Error(errorMessage),
            });
          } else {
            emitt({ albums: messagePayload });
          }
        }
      };
      worker.addEventListener('message', handleMessage);
      return () => {
        worker.removeEventListener('message', handleMessage);
        worker.call({
          type: IPC_CLOSE_ALBUMS_STREAM,
        });
      };
    });
  };
  const saveAlbumIfNotExists = payload => worker.call({
    type: IPC_SAVE_ALBUM_IF_NOT_EXISTS,
    payload,
  });
  const saveOrUpdateAlbum = payload => worker.call({
    type: IPC_SAVE_OR_UPDATE_ALBUM,
    payload,
  });
  const saveOrUpdateAlbums = payload => worker.call({
    type: IPC_SAVE_OR_UPDATE_ALBUMS,
    payload,
  });
  const deleteAlbumsFromCollection = cids => worker.call({
    type: IPC_DELETE_ALBUMS_IN_COLLECTION_BY_CIDS,
    payload: cids,
  });
  return {
    saveAlbumIfNotExists,
    saveOrUpdateAlbum,
    saveOrUpdateAlbums,
    findAlbumInCollectionByCid,
    findAlbumsInCollectionByCids,
    findOutdatedAlbumsInCollection,
    findAlbumsInCollection,
    deleteAlbumsFromCollection,
    getAlbumsCollectionInfo,
  };
};

export default getAlbumsCollectionApi;
