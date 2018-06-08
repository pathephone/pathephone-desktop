import { call, put, takeEvery } from 'redux-saga/effects'
import {
  systemAlbumCandidateRecieved,
  systemAlbumUpdated,
  systemAlbumSaved
} from '~actions/system'

function * handleIncomingAlbums (apis, album) {
  const {
    findAlbumInCollectionByCid,
    saveAlbumToCollection
  } = apis
  try {
    const { cid, data } = album
    const lastSeen = new Date().getTime()
    yield put(systemAlbumCandidateRecieved(cid))
    const existedAlbum = yield findAlbumInCollectionByCid(cid)
    if (existedAlbum) {
      existedAlbum.update({ lastSeen })
      yield put(systemAlbumUpdated(cid))
    } else {
      yield saveAlbumToCollection({ cid, data, lastSeen })
      yield put(systemAlbumSaved(cid))
    }
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
