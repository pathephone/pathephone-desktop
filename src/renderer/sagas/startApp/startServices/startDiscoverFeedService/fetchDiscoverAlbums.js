import { select, put, call, take } from 'redux-saga/effects'

import normalizeCollectionAlbum from '~utils/normalizeCollectionAlbum'

import { getFeedAlbumsLimit, getDiscoverSearchValue } from '#selectors'
import { systemDiscoverAlbumsFetchSucceed } from '#actions-system'

function * fetchDiscoverAlbums (apis) {
  const { findAlbumsInCollectionByText } = apis
  const limit = yield select(getFeedAlbumsLimit)
  const text = yield select(getDiscoverSearchValue)
  const albumsSource = yield call(findAlbumsInCollectionByText, { limit, text })
  try {
    while (true) {
      const albums = yield take(albumsSource)
      const normalizedAlbums = albums.map(normalizeCollectionAlbum)
      yield put(systemDiscoverAlbumsFetchSucceed(normalizedAlbums))
    }
  } catch (e) {
    console.error(e)
  }
}

export default fetchDiscoverAlbums
