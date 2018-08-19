import { all, takeEvery } from 'redux-saga/effects';

import actions from '#actions';

import handleShareFormChange from './startAlbumsSharingService/handleShareFormChange';
import handleShareFormSubmit from './startAlbumsSharingService/handleShareFormSubmit';
import handleShareItemsSelect from './startAlbumsSharingService/handleShareItemsSelect';

function* startAlbumsSharingService(apis) {
  yield all([
    takeEvery(actions.uiShareItemsSelected, handleShareItemsSelect, apis),
    takeEvery(actions.uiShareFormSubmited, handleShareFormSubmit, apis),
    takeEvery(actions.uiShareFormChanged, handleShareFormChange, apis),
  ]);
}

export default startAlbumsSharingService;
