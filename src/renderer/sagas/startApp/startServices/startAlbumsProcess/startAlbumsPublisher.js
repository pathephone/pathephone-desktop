import { take, fork, call } from 'redux-saga/effects'

import albumsToPublishChannel from './startAlbumsPublisher/albumsToPulishChannel'
import publishAlbums from './startAlbumsPublisher/publishAlbums'

function * startAlbumsReceiver ({ albumsGate, albumsCollection }) {
  const channel = yield call(albumsToPublishChannel, { albumsCollection })
  try {
    while (true) {
      const albums = yield take(channel)
      yield fork(publishAlbums, { albums, albumsGate })
    }
  } catch (error) {
    console.error(error)
  }
}

export default startAlbumsReceiver
