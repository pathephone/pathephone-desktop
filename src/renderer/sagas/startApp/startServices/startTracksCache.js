import { takeEvery, all } from 'redux-saga/effects'

import cacheTracks from './startTracksCache/cacheTracks'
import { systemPlayedTracksRecieved, systemQueuedTracksRecieved } from '#actions-system'

function * startTracksCache (args) {
  yield all([
    takeEvery([
      systemPlayedTracksRecieved,
      systemQueuedTracksRecieved
    ], cacheTracks, args)
  ])
}

export default startTracksCache
