import { call, put, select } from 'redux-saga/effects'

import {
  systemDiscoverSelectedActionFailed,
  systemUiLocked,
  systemUiUnlocked,
  systemPlayedTracksRecieved,
  systemQueuedTracksRecieved,
  systemDiscoverSelectedActionSucceed
} from '~actions/system'

import {
  uiDiscoverSelectedPlayed,
  uiDiscoverSelectedQueued
} from '~actions/ui'

import { getDiscoverSelectedCids } from '#selectors'
import getPlaylistTracksFromAlbums from '~utils/getPlaylistTracksFromAlbums'

function * playOrQueueSelectedAlbums (args, { type }) {
  yield put(systemUiLocked())
  try {
    const selectedAlbums = yield select(getDiscoverSelectedCids)
    const tracks = yield call(getPlaylistTracksFromAlbums, args, selectedAlbums)
    if (type === uiDiscoverSelectedPlayed.toString()) {
      yield put(systemPlayedTracksRecieved(tracks))
    }
    if (type === uiDiscoverSelectedQueued.toString()) {
      yield put(systemQueuedTracksRecieved(tracks))
    }
    yield put(systemDiscoverSelectedActionSucceed())
  } catch (e) {
    yield put(systemDiscoverSelectedActionFailed(e.message))
  }
  yield put(systemUiUnlocked())
}

export default playOrQueueSelectedAlbums
