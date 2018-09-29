import { call, put } from 'redux-saga/effects';

import actions from '#actions';

import i18n from '~shared/data/i18n';
import printRenderer from '~shared/utils/printRenderer';

function* handleShareItemsSelect(apis, { payload }) {
  const { getAlbumCandidatesFromFs } = apis;
  try {
    const selectedFsItems = Array.from(payload)
      .map(file => file.path);
    const candidates = yield call(getAlbumCandidatesFromFs, selectedFsItems);

    if (candidates.length > 0) {
      yield put(actions.systemShareCandidatesRecieved(candidates));
    } else {
      yield put(actions.systemShareCandidatesNotFound(
        { warningMessage: i18n.NO_ALBUMS_FOUND },
      ));
    }
  } catch (e) {
    printRenderer.error(e);
    yield put(actions.systemShareFilesProcessingFailed(
      { errorMessage: i18n.ERROR_PROCESSING_FILES },
    ));
  }
}

export default handleShareItemsSelect;
