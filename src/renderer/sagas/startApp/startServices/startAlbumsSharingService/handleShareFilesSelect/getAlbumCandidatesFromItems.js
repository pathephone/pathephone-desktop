import { all, call } from 'redux-saga/effects'

import getCandidateFromFiles from './getAlbumCandidatesFromItems/getCandidateFromFiles'
import getAlbumCandidatesFromFolders from './getAlbumCandidatesFromItems/getCandidatesFromFolders'

// Rewrite to pure File solution once https://github.com/electron/electron/issues/839 resolved

function * getAlbumCandidatesFromItems (apis, selectedItems) {
  const { splitFoldersAndFiles } = apis
  const { folders, files } = yield call(splitFoldersAndFiles, selectedItems)
  const [ candidateFromFiles, candidatesFromFolders ] = yield all([
    call(getCandidateFromFiles, apis, files),
    call(getAlbumCandidatesFromFolders, apis, folders)
  ])
  let candidates = []
  if (candidateFromFiles) {
    candidates.push(candidateFromFiles)
  }
  if (candidatesFromFolders) {
    candidates.push(...candidatesFromFolders)
  }
  return candidates
}

export default getAlbumCandidatesFromItems
