import { call, put, all } from 'redux-saga/effects'
import { systemTrackCached } from '#actions-system'

function * cacheTrack ({ ipfsApi }, cid) {
  yield call(ipfsApi.files.get, cid)
  yield put(systemTrackCached(cid))
}

function * cachePlaylistTracks (args, { payload }) {
  const handleMap = ({ cid }) => call(cacheTrack, args, cid)
  yield all(
    payload.map(handleMap)
  )
}
export default cachePlaylistTracks
