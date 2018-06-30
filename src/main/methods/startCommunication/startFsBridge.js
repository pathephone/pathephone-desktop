import createThreadController from '~utils/createThreadController'
import { ipcMainTake } from '~utils/ipcMain'

import {
  IPC_GET_ALBUM_CANDIDATES_FROM_FS_ITEMS,
  IPC_GET_TRACKS_FROM_FS_FILES
} from '~data/ipcTypes'

const callAndClose = async (name, payload) => {
  const thread = createThreadController(name)
  const data = await thread.call({ payload })
  thread.disconnect()
  return data
}

const startFsBridge = () => {
  const apiUnlisteners = [
    ipcMainTake(
      IPC_GET_ALBUM_CANDIDATES_FROM_FS_ITEMS,
      fsItems => callAndClose('getAlbumCandidatesFromFsItems', fsItems)
    ),
    ipcMainTake(
      IPC_GET_TRACKS_FROM_FS_FILES,
      files => callAndClose('getTracksFromFsFiles', files)
    )
  ]
  return () => {
    apiUnlisteners.forEach(unlisten => { unlisten() })
  }
}

export default startFsBridge
