import { Channel, eventChannel } from 'redux-saga';

import { ICollectionAlbum, ICollectionStat } from '~renderer/types/api';
import ipc from '~shared/data/ipc';
import { IMetabinAlbum } from '~shared/types/domains/album';
import { callWorkerMethod } from '~shared/utils/callWorkerMethod';
import DBWorkerConstructor from './getStorageApi/dbApi.worker';

const dbWorker: Worker = new DBWorkerConstructor();

export const startDb: () => Promise<void> = (
): Promise<void> => callWorkerMethod(dbWorker, {
  type: ipc.START_DB,
  payload: undefined
});

export const getAlbumsCollectionInfo: () => Promise<ICollectionStat> = (
): Promise<ICollectionStat> => callWorkerMethod(dbWorker, {
  type: ipc.GET_ALBUMS_COLLECTION_INFO,
  payload: undefined
});

export const findAlbumInCollectionByCid: (cid: string) => Promise<IMetabinAlbum> = (
  cid: string
): Promise<IMetabinAlbum> => {
  return callWorkerMethod(dbWorker, {
    type: ipc.FIND_ALBUM_IN_COLLECTION_BY_CID,
    payload: cid
  });
};

export const findAlbumsInCollectionByCids: (cids: string[]) => Promise<ICollectionAlbum[]> = (
  cids: string[]
): Promise<ICollectionAlbum[]> => {
  return callWorkerMethod(dbWorker, {
    type: ipc.FIND_ALBUMS_IN_COLLECTION_BY_CIDS,
    payload: cids
  });
};

export const findOutdatedAlbumsInCollection: (period: number) => Promise<IMetabinAlbum[]> = (
  period: number
): Promise<IMetabinAlbum[]> => callWorkerMethod(dbWorker, {
  type: ipc.FIND_OUTDATED_ALBUMS_IN_COLLECTION,
  payload: period
});

interface IChannelError {
  error: Error;
}
interface IChannelPayload {
  albums: {};
}

type IChannelMessage = IChannelError | IChannelPayload;

export interface IAlbumsTextSearchParams {
  text: string;
  limit: number;
}

export const findAlbumsInCollection: (p: IAlbumsTextSearchParams) => (
  Promise<Channel<IChannelMessage>>
) = (
  async (payload: IAlbumsTextSearchParams): Promise<Channel<IChannelMessage>> => {
    await callWorkerMethod(dbWorker, {
      type: ipc.OPEN_ALBUMS_STREAM,
      payload
    });

    return eventChannel((emitt: (p: IChannelMessage) => void) => {
      const handleMessage: EventListener = (
        { data }: ServiceWorkerMessageEvent
      ): void  => {
        const { type, payload: messagePayload, errorMessage } = data;
        if (type === ipc.ALBUMS_STREAMED) {
          if (errorMessage) {
            emitt({
              error: new Error(errorMessage)
            });
          } else {
            emitt({ albums: messagePayload });
          }
        }
      };
      dbWorker.addEventListener('message', handleMessage);

      return (): void => {
        dbWorker.removeEventListener('message', handleMessage);
        callWorkerMethod(dbWorker, {
          type: ipc.CLOSE_ALBUMS_STREAM,
          payload: undefined
        });
      };
    });
  }
);

interface IAlbumsCollectionRecord {
  data: IMetabinAlbum;
  cid: string;
}

export const saveAlbumIfNotExists: (p: IAlbumsCollectionRecord) => Promise<void> = (
  payload: IAlbumsCollectionRecord
): Promise<void> => callWorkerMethod(dbWorker, {
  type: ipc.SAVE_ALBUM_IF_NOT_EXISTS,
  payload
});

export const saveOrUpdateAlbum: (p: IMetabinAlbum) => Promise<void> = (
  payload: IMetabinAlbum
): Promise<void> => callWorkerMethod(dbWorker, {
  type: ipc.SAVE_OR_UPDATE_ALBUM,
  payload
});

export const saveOrUpdateAlbums: (p: IMetabinAlbum[]) => Promise<ICollectionStat> = (
  payload: IMetabinAlbum[]
): Promise<ICollectionStat> => callWorkerMethod(dbWorker, {
  type: ipc.SAVE_OR_UPDATE_ALBUMS,
  payload
});

export const deleteAlbumsFromCollection: (p: string[]) => Promise<void> = (
  cids: string[]
): Promise<void> => callWorkerMethod(dbWorker, {
  type: ipc.DELETE_ALBUMS_IN_COLLECTION_BY_CIDS,
  payload: cids
});
