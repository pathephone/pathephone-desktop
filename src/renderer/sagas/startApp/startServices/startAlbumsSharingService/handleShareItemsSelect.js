import { call, put } from 'redux-saga/effects';

import {
  systemShareCandidatesRecieved,
  systemShareFilesProcessingFailed,
  systemShareCandidatesNotFound,
} from '~actions/system';

import i18n from '~data/i18n';

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
        { warningMessage: i18n.NO_ALBUMS_FOUND },
      ));
    }
  } catch (e) {
    console.error(e);
    yield put(systemShareFilesProcessingFailed(
      { errorMessage: i18n.ERROR_PROCESSING_FILES },
    ));
  }
}

export default handleShareItemsSelect;
