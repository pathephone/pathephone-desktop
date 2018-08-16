import { call, put } from 'redux-saga/effects';

import {
  systemShareCandidatesRecieved,
  systemShareFilesProcessingFailed,
  systemShareCandidatesNotFound,
} from '~actions/system';

import {
  LOCAL_NO_ALBUMS_FOUND,
  LOCAL_ERROR_PROCESSING_FILES,
} from '~data/i18nConstants';

function* handleShareItemsSelect(apis, { payload }) {
  const { getAlbumCandidatesFromFs } = apis;
  try {
    const selectedFsItems = Array.from(payload)
      .map(file => file.path);
    const candidates = yield call(getAlbumCandidatesFromFs, selectedFsItems);

    if (candidates.length > 0) {
      yield put(systemShareCandidatesRecieved(candidates));
    } else {
      yield put(systemShareCandidatesNotFound(
        { warningMessage: LOCAL_NO_ALBUMS_FOUND },
      ));
    }
  } catch (e) {
    console.error(e);
    yield put(systemShareFilesProcessingFailed(
      { errorMessage: LOCAL_ERROR_PROCESSING_FILES },
    ));
  }
}

export default handleShareItemsSelect;
