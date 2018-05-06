import { call, take, put } from 'redux-saga/effects'
import { uiAlbumFormSubmited } from '#actions-ui'

const normalizeAlbumFormData = async ({ ipfsApi, formData }) => {
  return formData
}

function * startAlbumFormService ({ outcomingAlbumsChannel, ipfsApi }) {
  try {
    while (true) {
      const formData = yield take(uiAlbumFormSubmited)
      const album = yield call(normalizeAlbumFormData, { formData, ipfsApi })
      yield put(outcomingAlbumsChannel, album)
    }
  } catch (error) {
    console.error(error)
  }
}

export default startAlbumFormService
