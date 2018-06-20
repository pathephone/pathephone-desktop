import { call, takeEvery } from 'redux-saga/effects'
import { eventChannel } from 'redux-saga'

import { ALBUMS_PUBLISH_INTERVAL, ALBUMS_APEARENCE_INTERVAL } from '~data/constants'

function getAlbumsCollectionSource (apis) {
  const { findOutdatedAlbumsInCollection } = apis
  return eventChannel(emit => {
    const handleTick = async () => {
      const period = new Date().getTime() - ALBUMS_APEARENCE_INTERVAL
      const albums = await findOutdatedAlbumsInCollection(period)
      albums.forEach(emit)
    }
    const interval = setInterval(handleTick, ALBUMS_PUBLISH_INTERVAL)
    return () => {
      clearInterval(interval)
    }
  })
}

function * publishAlbum ({ publishAlbumByCid }, album) {
  yield call(publishAlbumByCid, album.cid)
}

function * startAlbumsPublisher (apis) {
  const albumsCollectionSource = yield call(getAlbumsCollectionSource, apis)
  yield takeEvery(albumsCollectionSource, publishAlbum, apis)
}

export default startAlbumsPublisher
