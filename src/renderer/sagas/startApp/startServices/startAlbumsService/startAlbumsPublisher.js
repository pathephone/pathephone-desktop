import { take, fork } from 'redux-saga/effects'

import publishAlbums from './startAlbumsPublisher/publishAlbums'

function * startAlbumsReceiver ({ outcomingAlbumsChannel, albumsGate }) {
  try {
    while (true) {
      const albums = yield take(outcomingAlbumsChannel)
      yield fork(publishAlbums, { albums, albumsGate })
    }
  } catch (error) {
    console.error(error)
  }
}

export default startAlbumsReceiver
