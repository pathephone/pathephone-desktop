import { call, select } from 'redux-saga/effects'
import { getPlaylistUncachedTracksCIDs } from '#selectors'

function * cachePlaylistTracks (api) {
  const { cacheIPFSFilesByCIDs } = api
  const uncachedTracks = yield select(getPlaylistUncachedTracksCIDs)
  try {
    yield call(cacheIPFSFilesByCIDs, uncachedTracks)
  } catch (e) {
    console.error(e)
  }
}

export default cachePlaylistTracks
