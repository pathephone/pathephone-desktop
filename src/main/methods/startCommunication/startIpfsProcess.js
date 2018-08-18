import createThreadController from '~shared/utils/createThreadController';

import ipc from '~shared/data/ipc';
import beforeIpfsDaemonStart from './startIpfsProcess/beforeIpfsDaemonStart';
import getIpfsDaemonParams from './startIpfsProcess/getIpfsDaemonParams';

const startIpfsProcess = async () => {
  beforeIpfsDaemonStart();
  const daemonParams = getIpfsDaemonParams();
  const ipfsProcess = createThreadController('ipfs');
  await ipfsProcess.call({ type: ipc.IPFS_START, payload: daemonParams });
  return ipfsProcess;
};

export default startIpfsProcess;
