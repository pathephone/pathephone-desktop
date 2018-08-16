import createThreadReducer from '~utils/createThreadReducer';

import ipc from '~data/ipc';

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
    case ipc.IPFS_START:
      ipfsDaemonPromise = startIpfsDaemon(payload);
      return undefined;
    case ipc.IPFS_GET_INFO:
      return getIpfsInfo(args);
    case ipc.IPFS_CACHE_CIDS:
      return ipfsCacheFilesByCIDs(args);
    case ipc.IPFS_SHARE_FS_FILE:
      return ipfsShareFsFile(args);
    case ipc.IPFS_SHARE_OBJECT:
      return ipfsShareObject(args);
    case ipc.IPFS_GET_STATS:
      return getIPFSStats(args);
    case ipc.METABIN_GATE_SUBSCRIBE:
      return metabinSubscribe(args);
    case ipc.METABIN_GATE_SEND_EACH:
      return metabinSendEach(args);
    case ipc.METABIN_GATE_UNSUBSCRIBE:
      return metabinUnsubscribe(args);
    case ipc.METABIN_GET_RECIEVED_DATA_CACHE:
      return metabinGetRecievedDataCache(args);
    case ipc.METABIN_GET_PEERS_COUNT:
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
