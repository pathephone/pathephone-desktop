import { eventChannel } from 'redux-saga'
import { select, put, call, take } from 'redux-saga/effects'

import createAlbumsQuery from '~utils/createAlbumsQuery'
import normalizeCollectionAlbum from '~utils/normalizeCollectionAlbum'

import { getFeedAlbumsLimit, getDiscoverSearchValue } from '#selectors'
import { systemDiscoverAlbumsFetchSucceed } from '#actions-system'

function getAlbumsSource ({ albumsCollection }, { limit, searchText }) {
  return eventChannel(emitter => {
    const subscription = albumsCollection
      .find(createAlbumsQuery(searchText))
      .limit(limit)
      .$
      .subscribe(emitter)
    return () => subscription.unsubscribe()
  })
}

function * fetchDiscoverAlbums (args) {
  const limit = yield select(getFeedAlbumsLimit)
  const searchText = yield select(getDiscoverSearchValue)
  const albumsSource = yield call(getAlbumsSource, args, { limit, searchText })
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
