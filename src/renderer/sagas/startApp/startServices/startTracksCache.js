import { takeEvery, all } from 'redux-saga/effects'

import cachePlaylistTracks from './startTracksCache/cachePlaylistTracks'
import { systemPlayedTracksRecieved, systemQueuedTracksRecieved } from '~actions/system'

function * startTracksCache (args) {
  yield all([
    takeEvery([
      systemPlayedTracksRecieved,
      systemQueuedTracksRecieved
    ], cachePlaylistTracks, args)
  ])
}

export default startTracksCache
