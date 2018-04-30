import { take, call } from 'redux-saga/effects'

import saveAlbumToDb from './startAlbumReceiver/saveAlbumToDb'

function * startAlbumsReceiver ({ incomingAlbumsChannel, albumsCollection }) {
  while (true) {
    const album = yield take(incomingAlbumsChannel)
    yield call(saveAlbumToDb, { album, albumsCollection })
  }
}

export default startAlbumsReceiver
