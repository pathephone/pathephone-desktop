import ipc from '~shared/data/ipc';

import { rendererCalls } from '~shared/utils/ipcRenderer';

const schemaName = 'albumSchema';

const getAlbumsGateApi = async () => {
  const publishAlbumsByCIDs = cids => rendererCalls(ipc.METABIN_GATE_SEND_EACH, schemaName, cids);
  const subscribeToAlbumsGate = () => rendererCalls(ipc.METABIN_GATE_SUBSCRIBE, schemaName);
  const unsubscribeFromAlbumsGate = () => rendererCalls(ipc.METABIN_GATE_UNSUBSCRIBE, schemaName);
  const getRecievedAlbumsCache = () => (
    rendererCalls(ipc.METABIN_GET_RECIEVED_DATA_CACHE, schemaName)
  );
  const getMetabinPeersCount = () => rendererCalls(ipc.METABIN_GET_PEERS_COUNT, schemaName);

  return {
    publishAlbumsByCIDs,
    subscribeToAlbumsGate,
    unsubscribeFromAlbumsGate,
    getRecievedAlbumsCache,
    getMetabinPeersCount,
  };
};

export default getAlbumsGateApi;
