import { fork } from 'redux-saga/effects'

import startAlbumsReceiver from './startAlbumsProcess/startAlbumsReceiver'
import startAlbumsPublisher from './startAlbumsProcess/startAlbumsPublisher'

function * startAlbumsProcess (args) {
  yield [
    fork(startAlbumsReceiver, args),
    fork(startAlbumsPublisher, args)
  ]
  /*
  const albumsChannel = yield call(openAlbumsChannel, { albumsGate })

  while (true) {
    const album = yield take(albumsChannel)
    yield call(saveAlbumToDb, { album, albumsCollection })
  }
  */
}

export default startAlbumsProcess
