import { ipcMainTake } from '~utils/ipcMain'
import {
  IPC_GET_ALBUM_CANDIDATES_FROM_FS,
  IPC_GET_TRACKS_FROM_FS_FILES
} from '~data/ipcTypes'

import getAlbumCandidatesFromFs from './startFsApi/getAlbumCandidatesFromFs'
import getTracksFromFiles from './startFsApi/getAlbumCandidatesFromFs/getCandidatesFromFiles/getTracksFromFiles'

const startFsApi = () => {
  const handleGetAlbumCandidatesFromFs = fsItems => {
    return getAlbumCandidatesFromFs(fsItems)
  }
  const apiUnlisteners = [
    ipcMainTake(IPC_GET_ALBUM_CANDIDATES_FROM_FS, handleGetAlbumCandidatesFromFs),
    ipcMainTake(IPC_GET_TRACKS_FROM_FS_FILES, getTracksFromFiles)
  ]
  return () => {
    apiUnlisteners.forEach(unlisten => { unlisten() })
  }
}

export default startFsApi
