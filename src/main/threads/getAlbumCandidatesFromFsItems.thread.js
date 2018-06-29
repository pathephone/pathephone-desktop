import { createThreadMethod } from '~utils/ipcMain'

import getAlbumCandidatesFromFsItems from './getAlbumCandidatesFromFsItems.thread/getAlbumCandidatesFromFsItems'

createThreadMethod(getAlbumCandidatesFromFsItems)
