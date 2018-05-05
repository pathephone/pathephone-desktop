import { channel } from 'redux-saga'
import { call, take } from 'redux-saga/effects'

function * startAlbumsPublisher ({ albumsGate }) {
  const publishChannel = yield call(channel)
  try {
    while (true) {
      const album = yield take(publishChannel)
      yield call(albumsGate.publish, album.cid)
    }
  } catch (error) {
    console.error(error)
  }
}

export default startAlbumsPublisher
