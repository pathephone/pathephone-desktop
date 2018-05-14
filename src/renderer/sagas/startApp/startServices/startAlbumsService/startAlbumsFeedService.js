import { select, takeLatest, put, fork } from 'redux-saga/effects'
import { uiMoreDiscoverAlbumsRequested } from '#actions-ui'
import { getFeedAlbumsLimit } from '#selectors'
import { systemDiscoverAlbumsFetchSucceed } from '#actions-system'

const normalizeCollectionAlbum = ({ cid, data: { cover, title, tracks } }) =>
  ({
    albumCid: cid,
    albumArtist: tracks[0].artist,
    albumTitle: title,
    albumCoverCid: cover,
    lowestQuality: tracks[0].bitrate
  })

function * fetchDiscoverAlbums (args) {
  try {
    const { albumsCollection } = args
    const limit = yield select(getFeedAlbumsLimit)
    const albums = yield albumsCollection
      .find()
      .limit(limit)
      .exec()
    const normalizedAlbums = albums.map(normalizeCollectionAlbum)
    yield put(systemDiscoverAlbumsFetchSucceed(normalizedAlbums))
  } catch (e) {
    console.error(e)
  }
}

function * startAlbumsSharingService (args) {
  yield fork(fetchDiscoverAlbums, args)
  yield takeLatest(uiMoreDiscoverAlbumsRequested, fetchDiscoverAlbums, args)
}

export default startAlbumsSharingService
