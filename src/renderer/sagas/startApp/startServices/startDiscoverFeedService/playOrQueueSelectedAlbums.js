import { call, put, select } from 'redux-saga/effects'

import albumTrackToPlaylistTrack from '~utils/albumTrackToPlaylistTrack'

import {
  systemDiscoverSelectedActionFailed,
  systemUiLocked,
  systemUiUnlocked,
  systemPlayedTracksRecieved,
  systemQueuedTracksRecieved,
  systemDiscoverSelectedActionSucceed
} from '#actions-system'

import { getDiscoverSelectedAlbums } from '#selectors'
import { uiDiscoverSelectedPlayed, uiDiscoverSelectedQueued } from '#actions-ui'

const getPlaylistTracksFromAlbums = async ({ albumsCollection }, cids) => {
  const query = {
    cid: {
      $in: cids
    }
  }
  const docs = await albumsCollection
    .find(query)
    .exec()
  const handleReduce = (acc, { data }) => {
    const handleEach = track => {
      acc.push(albumTrackToPlaylistTrack(track))
    }
    data.tracks.forEach(handleEach)
    return acc
  }
  return docs.reduce(handleReduce, [])
}

function * playOrQueueSelectedAlbums (args, { type }) {
  yield put(systemUiLocked())
  try {
    const selectedAlbums = yield select(getDiscoverSelectedAlbums)
    const tracks = yield call(getPlaylistTracksFromAlbums, args, selectedAlbums)
    if (type === uiDiscoverSelectedPlayed) {
      yield put(systemPlayedTracksRecieved(tracks))
    }
    if (type === uiDiscoverSelectedQueued) {
      yield put(systemQueuedTracksRecieved(tracks))
    }
    yield put(systemDiscoverSelectedActionSucceed())
  } catch (e) {
    yield put(systemDiscoverSelectedActionFailed(e.message))
  }
  yield put(systemUiUnlocked())
}

export default playOrQueueSelectedAlbums
