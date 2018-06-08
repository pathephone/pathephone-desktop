import { call, put, all } from 'redux-saga/effects'

import splitFoldersAndFiles from '~utils/splitFilesAndFolders'

import { systemShareCandidatesRecieved, systemShareFilesProcessingFailed, systemShareCandidatesNotFound } from '~actions/system'

import getAlbumCandidateFromFiles from './handleShareFilesSelect/getAlbumCandidateFromFiles'
import getAlbumCandidatesFromFolders from './handleShareFilesSelect/getAlbumCandidatesFromFolders'

function * handleShareFilesSelect (apis, { payload }) {
  try {
    const selectedFiles = Array.from(payload)
    const { folders, files } = splitFoldersAndFiles(selectedFiles)
    const [ candidateFromFiles, candidatesFromFolders ] = yield all([
      call(getAlbumCandidateFromFiles, files),
      call(getAlbumCandidatesFromFolders, folders)
    ])
    const candidates = [ candidateFromFiles, ...candidatesFromFolders ]
      .filter(c => !!c)
    if (candidates.length > 0) {
      yield put(systemShareCandidatesRecieved(candidates))
    } else {
      yield put(systemShareCandidatesNotFound({ warningMessage: 'No albums found.' }))
    }
  } catch (e) {
    console.error(e)
    yield put(systemShareFilesProcessingFailed({ errorMessage: e.message }))
  }
}

export default handleShareFilesSelect
