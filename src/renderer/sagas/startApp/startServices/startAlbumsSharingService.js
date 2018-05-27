import { all, takeEvery } from 'redux-saga/effects'

import { uiShareFilesSelected, uiShareFormSubmited, uiShareFormChanged } from '#actions-ui'
import handleShareFiles from './startAlbumsSharingService/handleShareFiles'
import handleShareFormChange from './startAlbumsSharingService/handleShareFormChange'
import handleShareCandidate from './startAlbumsSharingService/handleShareCandidate'

function * startAlbumsSharingService (args) {
  yield all([
    takeEvery(uiShareFilesSelected, handleShareFiles),
    takeEvery(uiShareFormSubmited, handleShareCandidate, args),
    takeEvery(uiShareFormChanged, handleShareFormChange, args)
  ])
}

export default startAlbumsSharingService
