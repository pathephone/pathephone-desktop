import ipc from '~shared/data/ipc';

import { IMetabinAlbum } from '~shared/types/domains/album';
import { rendererCalls } from '~shared/utils/ipcRenderer';

const schemaName: string = 'albumSchema';

export const publishAlbumsByCIDs: (p: IMetabinAlbum[]) => Promise<{}> = (
  albums: IMetabinAlbum[]
): Promise<{}> => rendererCalls(ipc.METABIN_GATE_SEND_EACH, schemaName, albums);

export const subscribeToAlbumsGate: () => Promise<void> = (
): Promise<void> => rendererCalls(ipc.METABIN_GATE_SUBSCRIBE, schemaName);

export const unsubscribeFromAlbumsGate: () => Promise<void> = (
): Promise<void> => rendererCalls(ipc.METABIN_GATE_UNSUBSCRIBE, schemaName);

export const getRecievedAlbumsCache: () => Promise<void> = (
): Promise<void> => (
  rendererCalls(ipc.METABIN_GET_RECIEVED_DATA_CACHE, schemaName)
);

export const getMetabinPeersCount: () => Promise<void> = (
): Promise<void> => rendererCalls(ipc.METABIN_GET_PEERS_COUNT, schemaName);
