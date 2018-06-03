import { call, put } from 'redux-saga/effects'

import splitFoldersAndFiles from '~utils/splitFilesAndFolders'

import { systemShareCandidatesRecieved } from '#actions-system'

import getAlbumCandidateFromFiles from './handleShareFilesSelect/getAlbumCandidateFromFiles'
import getAlbumCandidatesFromFolders from './handleShareFilesSelect/getAlbumCandidatesFromFolders'

function * handleShareFilesSelect (apis, { payload }) {
  try {
    const selectedFiles = Array.from(payload)
    const { folders, files } = splitFoldersAndFiles(selectedFiles)
    const candidateFromFiles = yield call(getAlbumCandidateFromFiles, files)
    const candidatesFromFolders = yield call(getAlbumCandidatesFromFolders, folders)
    const candidates = [ candidateFromFiles, ...candidatesFromFolders ]
      .filter(c => !!c)
    yield put(systemShareCandidatesRecieved(candidates))
  } catch (e) {
    console.error(e)
  }
}

export default handleShareFilesSelect
