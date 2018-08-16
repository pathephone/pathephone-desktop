import createThreadController from '~utils/createThreadController';

import { IPC_IPFS_START } from '~data/ipcTypes';
import beforeIpfsDaemonStart from './startIpfsProcess/beforeIpfsDaemonStart';
import getIpfsDaemonParams from './startIpfsProcess/getIpfsDaemonParams';

const startIpfsProcess = async () => {
  beforeIpfsDaemonStart();
  const daemonParams = getIpfsDaemonParams();
  const ipfsProcess = createThreadController('ipfs');
  await ipfsProcess.call({ type: IPC_IPFS_START, payload: daemonParams });
  return ipfsProcess;
};

export default startIpfsProcess;
