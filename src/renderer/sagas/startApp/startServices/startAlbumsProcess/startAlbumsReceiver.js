import { take, call } from 'redux-saga/effects'

import gateToSagaChannel from '~utils/gateToSagaChannel'

import saveAlbumToDb from './startAlbumReceiver/saveAlbumToDb'

function * startAlbumsReceiver ({ albumsGate, albumsCollection }) {
  const albumsChannel = yield call(gateToSagaChannel, albumsGate)

  while (true) {
    const album = yield take(albumsChannel)
    yield call(saveAlbumToDb, { album, albumsCollection })
  }
}

export default startAlbumsReceiver
