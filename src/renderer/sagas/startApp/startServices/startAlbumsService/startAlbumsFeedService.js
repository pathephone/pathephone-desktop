import { call, take, put, all } from 'redux-saga/effects'

function * startAlbumsSharingService (args) {
  try {
    while (true) {
      const { payload } = yield take(uiFeedBottomReached)
    }
  } catch (e) {
    console.error(e)
  }
}

export default startAlbumsSharingService
