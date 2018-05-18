import { call, takeEvery } from 'redux-saga/effects'
import { eventChannel } from 'redux-saga'

import { ALBUMS_PUBLISH_INTERVAL, ALBUMS_APEARENCE_INTERVAL } from '~data/constants'

function getAlbumsCollectionSource ({ albumsCollection }) {
  return eventChannel(emit => {
    const handleTick = async () => {
      const period = new Date().getTime() - ALBUMS_APEARENCE_INTERVAL
      const albums = await albumsCollection.find({ lastSeen: { $lt: period } }).exec()
      albums.forEach(emit)
    }
    const interval = setInterval(handleTick, ALBUMS_PUBLISH_INTERVAL)
    return () => {
      clearInterval(interval)
    }
  })
}

function * publishAlbum ({ albumsGate }, album) {
  yield call(albumsGate.send, album.cid)
}

function * startAlbumsPublisher (args) {
  const albumsCollectionSource = yield call(getAlbumsCollectionSource, args)
  yield takeEvery(albumsCollectionSource, publishAlbum, args)
}

export default startAlbumsPublisher
