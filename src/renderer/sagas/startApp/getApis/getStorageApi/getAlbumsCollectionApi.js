import { eventChannel } from 'redux-saga';

import ipc from '~data/ipc';

const getAlbumsCollectionApi = (worker) => {
  const getAlbumsCollectionInfo = () => worker.call({
    type: ipc.GET_ALBUMS_COLLECTION_INFO,
  });
  const findAlbumInCollectionByCid = cid => worker.call({
    type: ipc.FIND_ALBUM_IN_COLLECTION_BY_CID,
    payload: cid,
  });
  const findAlbumsInCollectionByCids = cids => worker.call({
    type: ipc.FIND_ALBUMS_IN_COLLECTION_BY_CIDS,
    payload: cids,
  });

  const findOutdatedAlbumsInCollection = period => worker.call({
    type: ipc.FIND_OUTDATED_ALBUMS_IN_COLLECTION,
    payload: period,
  });

  const findAlbumsInCollection = async (payload) => {
    await worker.call({
      type: ipc.OPEN_ALBUMS_STREAM,
      payload,
    });
    return eventChannel((emitt) => {
      const handleMessage = ({ data }) => {
        const { type, payload: messagePayload, errorMessage } = data;
        if (type === ipc.ALBUMS_STREAMED) {
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
          type: ipc.CLOSE_ALBUMS_STREAM,
        });
      };
    });
  };
  const saveAlbumIfNotExists = payload => worker.call({
    type: ipc.SAVE_ALBUM_IF_NOT_EXISTS,
    payload,
  });
  const saveOrUpdateAlbum = payload => worker.call({
    type: ipc.SAVE_OR_UPDATE_ALBUM,
    payload,
  });
  const saveOrUpdateAlbums = payload => worker.call({
    type: ipc.SAVE_OR_UPDATE_ALBUMS,
    payload,
  });
  const deleteAlbumsFromCollection = cids => worker.call({
    type: ipc.DELETE_ALBUMS_IN_COLLECTION_BY_CIDS,
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
