import { all, takeEvery } from 'redux-saga/effects';

import { handleShareFormChange } from '~renderer/sagas/startApp/startServices/startAlbumsSharingService/handleShareFormChange';
import { handleShareFormSubmit } from '~renderer/sagas/startApp/startServices/startAlbumsSharingService/handleShareFormSubmit';
import { handleShareItemsSelect } from '~renderer/sagas/startApp/startServices/startAlbumsSharingService/handleShareItemsSelect';
import actions from '~renderer/state/actions';

export function* startAlbumsSharingService(): Generator {
  yield all([
    takeEvery(actions.uiShareItemsSelected, handleShareItemsSelect),
    takeEvery(actions.uiShareFormSubmited, handleShareFormSubmit),
    takeEvery(actions.uiShareFormChanged, handleShareFormChange)
  ]);
}
