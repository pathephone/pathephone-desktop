import { call, put, all, select } from 'redux-saga/effects'
import { systemTrackCached } from '#actions-system'
import { getCachedTracks } from '#selectors'

function * cacheTrack ({ ipfsApi }, cid) {
  yield call(ipfsApi.files.get, cid)
  yield put(systemTrackCached(cid))
}

function * cachePlaylistTracks (args, { payload }) {
  const cached = yield select(getCachedTracks)
  const uniqueCids = payload.reduce((acc, { cid }) => {
    if (!cached.includes(cid)) {
      acc.push(cid)
    }
    return acc
  }, [])
  const handleMap = cid => call(cacheTrack, args, cid)
  yield all(
    uniqueCids.map(handleMap)
  )
}
export default cachePlaylistTracks
