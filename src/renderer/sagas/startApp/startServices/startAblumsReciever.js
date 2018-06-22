import { call, put, takeEvery } from 'redux-saga/effects'
import {
  systemAlbumCandidateRecieved,
  systemAlbumSaved
} from '~actions/system'

function * handleIncomingAlbums (apis, album) {
  const {
    saveOrUpdateAlbum
  } = apis
  try {
    const { cid, data } = album
    const lastSeenAt = new Date().getTime()
    yield put(systemAlbumCandidateRecieved(cid))
    yield call(saveOrUpdateAlbum, { cid, data, lastSeenAt })
    yield put(systemAlbumSaved(cid))
  } catch (e) {
    console.error(e)
  }
}

function * startAlbumsReciever (apis) {
  const { getIncomingAlbumsSource } = apis
  const incomingAlbumsSource = yield call(getIncomingAlbumsSource)
  yield takeEvery(incomingAlbumsSource, handleIncomingAlbums, apis)
}

export default startAlbumsReciever
