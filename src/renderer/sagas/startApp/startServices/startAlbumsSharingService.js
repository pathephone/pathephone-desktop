import { all, takeEvery } from 'redux-saga/effects'

import {
  uiShareItemsSelected,
  uiShareFormSubmited,
  uiShareFormChanged
} from '~actions/ui'

import handleShareFormChange from './startAlbumsSharingService/handleShareFormChange'
import handleShareFormSubmit from './startAlbumsSharingService/handleShareFormSubmit'
import handleShareItemsSelect from './startAlbumsSharingService/handleShareItemsSelect'

function * startAlbumsSharingService (apis) {
  yield all([
    takeEvery(uiShareItemsSelected, handleShareItemsSelect, apis),
    takeEvery(uiShareFormSubmited, handleShareFormSubmit, apis),
    takeEvery(uiShareFormChanged, handleShareFormChange, apis)
  ])
}

export default startAlbumsSharingService
