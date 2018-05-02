import { take, call } from 'redux-saga/effects'

import { initAlbumPublication } from '#actions'

function * startAlbumsPublisher ({ albumsGate }) {
  try {
    while (true) {
      const album = yield take(initAlbumPublication)
      yield call(albumsGate.publish, album.cid)
    }
  } catch (error) {
    console.error(error)
  }
}

export default startAlbumsPublisher
