import { all, takeEvery } from 'redux-saga/effects'

import { uiShareFilesSelected, uiShareFormSubmited, uiShareFormChanged } from '#actions-ui'
import handleShareFiles from './startAlbumsSharingService/handleShareFiles'
import handleShareFormChange from './startAlbumsSharingService/handleShareFormChange'
import handleShareFormSubmit from './startAlbumsSharingService/handleShareFormSubmit'

function * startAlbumsSharingService (apis) {
  yield all([
    takeEvery(uiShareFilesSelected, handleShareFiles, apis),
    takeEvery(uiShareFormSubmited, handleShareFormSubmit, apis),
    takeEvery(uiShareFormChanged, handleShareFormChange, apis)
  ])
}

export default startAlbumsSharingService
