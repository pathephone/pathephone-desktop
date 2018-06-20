import { all, call } from 'redux-saga/effects'

import splitFoldersAndFiles from '~utils/splitFilesAndFolders'
import getAlbumCandidateFromFiles from './getAlbumCandidatesFromItems/getCandidateFromFiles'
import getAlbumCandidatesFromFolders from './getAlbumCandidatesFromItems/getCandidatesFromFolders'

// Rewrite to pure File solution once https://github.com/electron/electron/issues/839 resolved

function * getAlbumCandidatesFromItems (apis, selectedItems) {
  const { folders, files } = splitFoldersAndFiles(selectedItems)
  const [ candidateFromFiles, candidatesFromFolders ] = yield all([
    call(getAlbumCandidateFromFiles, files),
    call(getAlbumCandidatesFromFolders, folders)
  ])
  const candidates = [ candidateFromFiles, ...candidatesFromFolders ]
    .filter(c => !!c)
  return candidates
}

export default getAlbumCandidatesFromItems
