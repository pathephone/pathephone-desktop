import { ipcRenderer } from 'electron';
import { Channel, eventChannel } from 'redux-saga';

import { IIpfsInfo, IIpfsStat } from '~renderer/types/api';
import ipc from '~shared/data/ipc';
import { rendererCalls } from '~shared/utils/ipcRenderer';

export const getIpfsInfo: () => Promise<IIpfsInfo> = (
): Promise<IIpfsInfo> => rendererCalls(ipc.IPFS_GET_INFO);

export const shareObjectToIpfs: (o: {}) => Promise<string> = (
  obj: {}
): Promise<string> => rendererCalls(ipc.IPFS_SHARE_OBJECT, obj);

export const shareFsFileToIpfs: (p: string) => Promise<string> = (
  filePath: string
): Promise<string> => rendererCalls(ipc.IPFS_SHARE_FS_FILE, filePath);

export const cacheIpfsFilesByCids: (p: string[]) => Promise<string[]> = (
  cids: string[]
): Promise<string[]> => rendererCalls(ipc.IPFS_CACHE_CIDS, cids);

export const openCachedIpfsFilesStream: () => Promise<void> = (
): Promise<void> => rendererCalls(ipc.IPFS_OPEN_CACHED_CIDS_STREAM);

export const getCachedIpfsFilesChannel: () => Channel<string> = (
): Channel<string> => eventChannel((emit: (p: string) => void) => {

  const handleMessage: (e: Event, a: string) => void = (
    e: Event, arg: string
  ): void => {
    emit(arg);
  };

  ipcRenderer.on(ipc.IPFS_CID_CACHE_SUCCEED, handleMessage);
  ipcRenderer.on(ipc.IPFS_CID_CACHE_FAILED, handleMessage);

  return (): void => {
    ipcRenderer.removeListener(ipc.IPFS_CID_CACHE_SUCCEED, handleMessage);
    ipcRenderer.removeListener(ipc.IPFS_CID_CACHE_FAILED, handleMessage);
  };
});

export const getIpfsStats: () => Promise<IIpfsStat> = (
): Promise<IIpfsStat> => rendererCalls(ipc.IPFS_GET_STATS);
