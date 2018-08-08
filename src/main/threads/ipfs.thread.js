import createThreadReducer from '~utils/createThreadReducer';

import {
  IPC_IPFS_START,
  IPC_IPFS_CACHE_CIDS,
  IPC_IPFS_SHARE_FS_FILE,
  IPC_IPFS_SHARE_OBJECT,
  IPC_METABIN_GATE_SUBSCRIBE,
  IPC_METABIN_GATE_SEND_EACH,
  IPC_METABIN_GATE_UNSUBSCRIBE,
  IPC_IPFS_GET_INFO,
  IPC_METABIN_GET_RECIEVED_DATA_CACHE,
  IPC_METABIN_GET_PEERS_COUNT,
  IPC_IPFS_GET_STATS,
} from '~data/ipcTypes';

import startIpfsDaemon from './ipfs.thread/startIpfsDaemon';

import {
  getIpfsInfo,
  ipfsShareFsFile,
  ipfsShareObject,
  ipfsCacheFilesByCIDs,
  getIPFSStats,
} from './ipfs.thread/ipfsApi';

import {
  metabinSubscribe,
  metabinUnsubscribe,
  metabinGetRecievedDataCache,
  metabinSendEach,
  getMetabinPeersCount,
} from './ipfs.thread/metabinApi';

let ipfsDaemonPromise;

const reducer = ({ type, payload }) => {
  const args = { ipfsDaemonPromise, payload };
  switch (type) {
    case IPC_IPFS_START:
      ipfsDaemonPromise = startIpfsDaemon(payload);
      return undefined;
    case IPC_IPFS_GET_INFO:
      return getIpfsInfo(args);
    case IPC_IPFS_CACHE_CIDS:
      return ipfsCacheFilesByCIDs(args);
    case IPC_IPFS_SHARE_FS_FILE:
      return ipfsShareFsFile(args);
    case IPC_IPFS_SHARE_OBJECT:
      return ipfsShareObject(args);
    case IPC_IPFS_GET_STATS:
      return getIPFSStats(args);
    case IPC_METABIN_GATE_SUBSCRIBE:
      return metabinSubscribe(args);
    case IPC_METABIN_GATE_SEND_EACH:
      return metabinSendEach(args);
    case IPC_METABIN_GATE_UNSUBSCRIBE:
      return metabinUnsubscribe(args);
    case IPC_METABIN_GET_RECIEVED_DATA_CACHE:
      return metabinGetRecievedDataCache(args);
    case IPC_METABIN_GET_PEERS_COUNT:
      return getMetabinPeersCount(args);
    default:
      throw new Error('ipfs.thread: Unknown message type.');
  }
};

createThreadReducer(reducer);

process.on('disconnect', async () => {
  try {
    const daemon = await ipfsDaemonPromise;
    daemon.stop();
  } catch (e) {
    console.error(e);
  }
});
