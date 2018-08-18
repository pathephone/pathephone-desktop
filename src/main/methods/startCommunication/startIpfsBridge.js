import { ipcMainTake } from '~shared/utils/ipcMain';

import ipc from '~shared/data/ipc';

const startIpfsBridge = ({ ipfsProcessPromise }) => {
  const handleIpfsStartRequest = async () => {
    const ipfsProcess = await ipfsProcessPromise;
    const ipfsInfo = await ipfsProcess.call({ type: ipc.IPFS_GET_INFO });
    return ipfsInfo;
  };
  const handleShareObject = async (obj) => {
    const ipfsProcess = await ipfsProcessPromise;
    return ipfsProcess.call({ type: ipc.IPFS_SHARE_OBJECT, payload: obj });
  };
  const handleShareFsFile = async (filePath) => {
    const ipfsProcess = await ipfsProcessPromise;
    return ipfsProcess.call({ type: ipc.IPFS_SHARE_FS_FILE, payload: filePath });
  };
  const handleCacheFilesByCIDs = async (cids) => {
    const ipfsProcess = await ipfsProcessPromise;
    return ipfsProcess.call({ type: ipc.IPFS_CACHE_CIDS, payload: cids });
  };

  const handleopenCachedIPFSFilesStream = async (event) => {
    const ipfsProcess = await ipfsProcessPromise;
    const handleMessage = ({ type, ...rest }) => {
      switch (type) {
        case ipc.IPFS_CID_CACHE_SUCCEED:
        case ipc.IPFS_CID_CACHE_FAILED:
          event.sender.send(type, rest);
          break;
        default:
          break;
      }
    };
    ipfsProcess.on('message', handleMessage);
    event.sender.on('destroyed', () => {
      ipfsProcess.removeListener('message', handleMessage);
    });
  };
  const handleGetStats = async () => {
    const ipfsProcess = await ipfsProcessPromise;
    return ipfsProcess.call({ type: ipc.IPFS_GET_STATS });
  };

  const apiUnlisteners = [
    ipcMainTake(ipc.IPFS_GET_INFO, handleIpfsStartRequest),
    ipcMainTake(ipc.IPFS_SHARE_OBJECT, handleShareObject),
    ipcMainTake(ipc.IPFS_SHARE_FS_FILE, handleShareFsFile),
    ipcMainTake(ipc.IPFS_CACHE_CIDS, handleCacheFilesByCIDs),
    ipcMainTake(ipc.IPFS_OPEN_CACHED_CIDS_STREAM, handleopenCachedIPFSFilesStream),
    ipcMainTake(ipc.IPFS_GET_STATS, handleGetStats),
  ];
  return () => {
    apiUnlisteners.forEach((unlisten) => { unlisten(); });
  };
};

export default startIpfsBridge;
