import { call, put } from 'redux-saga/effects'

import {
  systemShareCandidatesRecieved,
  systemShareFilesProcessingFailed,
  systemShareCandidatesNotFound
} from '~actions/system'

import {
  MESSAGE_NO_ALBUMS_FOUND,
  MESSAGE_ERROR_PROCESSING_FILES
} from '~data/textMessages'

function * handleShareItemsSelect (apis, { payload }) {
  const { getAlbumCandidatesFromFs } = apis
  try {
    const selectedFsItems = Array.from(payload)
      .map(file => file.path)
    const candidates = yield call(getAlbumCandidatesFromFs, selectedFsItems)

    if (candidates.length > 0) {
      yield put(systemShareCandidatesRecieved(candidates))
    } else {
      yield put(systemShareCandidatesNotFound(
        { warningMessage: MESSAGE_NO_ALBUMS_FOUND }
      ))
    }
  } catch (e) {
    console.error(e)
    yield put(systemShareFilesProcessingFailed(
      { errorMessage: MESSAGE_ERROR_PROCESSING_FILES }
    ))
  }
}

export default handleShareItemsSelect
