import createThreadReducer from '~utils/createThreadReducer'

import getTracksFromFsFiles from './getAlbumCandidatesFromFsItems.thread/getAlbumCandidatesFromFsItems/getCandidatesFromFiles/getTracksFromFsFiles'

createThreadReducer(({ payload }) => getTracksFromFsFiles(payload))
