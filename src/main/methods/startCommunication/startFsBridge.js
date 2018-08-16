import createThreadController from '~utils/createThreadController';
import { ipcMainTake } from '~utils/ipcMain';

import ipc from '~data/ipc';

const callAndClose = async (name, payload) => {
  const thread = createThreadController(name);
  const data = await thread.call({ payload });
  thread.disconnect();
  return data;
};

const startFsBridge = () => {
  const apiUnlisteners = [
    ipcMainTake(
      ipc.GET_ALBUM_CANDIDATES_FROM_FS_ITEMS,
      fsItems => callAndClose('getAlbumCandidatesFromFsItems', fsItems),
    ),
    ipcMainTake(
      ipc.GET_TRACKS_FROM_FS_FILES,
      files => callAndClose('getTracksFromFsFiles', files),
    ),
  ];
  return () => {
    apiUnlisteners.forEach((unlisten) => { unlisten(); });
  };
};

export default startFsBridge;
