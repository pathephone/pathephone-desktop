
import getTracksFromFsFiles from './getAlbumCandidatesFromFsItems.thread/getAlbumCandidatesFromFsItems/getCandidatesFromFiles/getTracksFromFsFiles'
import { createThreadMethod } from '~utils/ipcMain'

createThreadMethod(getTracksFromFsFiles)
