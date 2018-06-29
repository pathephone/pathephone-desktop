import { ipcMainTake, callThread } from '~utils/ipcMain'
import {
  IPC_GET_ALBUM_CANDIDATES_FROM_FS_ITEMS,
  IPC_GET_TRACKS_FROM_FS_FILES
} from '~data/ipcTypes'

const startFsApi = () => {
  const apiUnlisteners = [
    ipcMainTake(
      IPC_GET_ALBUM_CANDIDATES_FROM_FS_ITEMS,
      fsItems => callThread('getAlbumCandidatesFromFsItems', fsItems)
    ),
    ipcMainTake(
      IPC_GET_TRACKS_FROM_FS_FILES,
      files => callThread('getTracksFromFsFiles', files)
    )
  ]
  return () => {
    apiUnlisteners.forEach(unlisten => { unlisten() })
  }
}

export default startFsApi
