import { AnyAction } from 'redux';
import { call, put } from 'redux-saga/effects';

import { mainProcessApi } from '~renderer/api/intex';
import actions from '~renderer/state/actions';
import i18n from '~shared/data/i18n';
import { IMetabinAlbum } from '~shared/types/domains/album';

export function* handleShareItemsSelect({ payload }: AnyAction): Generator {
  try {
    const selectedFsItems: string[] = Array.from(payload)
      .map((file: File) => file.path);
    const candidates: IMetabinAlbum[] = yield call(mainProcessApi.getAlbumCandidatesFromFs, selectedFsItems);

    if (candidates.length > 0) {
      yield put(actions.systemShareCandidatesRecieved(candidates));
    } else {
      yield put(actions.systemShareCandidatesNotFound(
        { warningMessage: i18n.NO_ALBUMS_FOUND }
      ));
    }
  } catch (e) {
    console.error(e);
    yield put(actions.systemShareFilesProcessingFailed(
      { errorMessage: i18n.ERROR_PROCESSING_FILES }
    ));
  }
}
