import { call, takeEvery } from 'redux-saga/effects'
import { systemPlayedTracksRecieved, systemQueuedTracksRecieved, systemDiscoverAlbumsFetchSucceed } from '~actions/system'
import cachePlaylistTracks from './startIPFSFilesCatch/cachePlaylistTracks'
import cacheDiscoverAlbumsCovers from './startIPFSFilesCatch/cacheDiscoverAlbumsCovers'

function * startIPFSFilesCatch (api) {
  yield call(cachePlaylistTracks, api)
  yield takeEvery(
    [ systemPlayedTracksRecieved, systemQueuedTracksRecieved ], cachePlaylistTracks, api
  )
  yield takeEvery(
    systemDiscoverAlbumsFetchSucceed, cacheDiscoverAlbumsCovers, api
  )
}

export default startIPFSFilesCatch
