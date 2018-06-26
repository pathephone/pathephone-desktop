import { call, put, all, select } from 'redux-saga/effects'
import { systemTrackCached } from '~actions/system'
import { getCachedTracks } from '#selectors'

function * cacheTrack ({ getFilesFromIpfs }, cid) {
  yield call(getFilesFromIpfs, cid)
  yield put(systemTrackCached(cid))
}

function * cachePlaylistTracks (args, { payload }) {
  const cached = yield select(getCachedTracks)
  const uniqueCids = payload.reduce((acc, { audio }) => {
    if (!cached.includes(audio)) {
      acc.push(audio)
    }
    return acc
  }, [])
  const handleMap = cid => call(cacheTrack, args, cid)
  yield all(
    uniqueCids.map(handleMap)
  )
}
export default cachePlaylistTracks
