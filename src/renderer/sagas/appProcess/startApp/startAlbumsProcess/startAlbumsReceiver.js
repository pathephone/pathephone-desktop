import { take, call } from 'redux-saga/effects'

import transformGateToChannel from '~utils/transformGateToChannel'

import saveAlbumToDb from './startAlbumReceiver/saveAlbumToDb'

function * startAlbumsReceiver ({ albumsGate, albumsCollection }) {
  const albumsChannel = yield call(transformGateToChannel, albumsGate)

  while (true) {
    const album = yield take(albumsChannel)
    yield call(saveAlbumToDb, { album, albumsCollection })
  }
}

export default startAlbumsReceiver
