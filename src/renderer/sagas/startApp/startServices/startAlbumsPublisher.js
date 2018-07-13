import { call, takeEvery } from 'redux-saga/effects'
import { eventChannel } from 'redux-saga'

import { IS_OFFLINE } from '#config'

import { ALBUMS_PUBLISH_INTERVAL, ALBUMS_APPEARENCE_INTERVAL } from '~data/constants'

function getAlbumsCollectionSource (apis) {
  const { findOutdatedAlbumsInCollection } = apis
  return eventChannel(emit => {
    const handleTick = async () => {
      const period = new Date().getTime() - ALBUMS_APPEARENCE_INTERVAL
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
  if (!IS_OFFLINE) {
    const albumsCollectionSource = yield call(getAlbumsCollectionSource, apis)
    yield takeEvery(albumsCollectionSource, publishAlbum, apis)
  }
}

export default startAlbumsPublisher
