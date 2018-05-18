import { put, call, takeEvery } from 'redux-saga/effects'
import gateToSagaChannel from '~utils/gateToSagaChannel'
import {
  systemAlbumCandidateRecieved,
  systemAlbumUpdated,
  systemAlbumSaved
} from '#actions-system'

function * handleIncomingGateAlbums ({ albumsCollection }, album) {
  try {
    const { cid, data } = album
    const lastSeen = new Date().getTime()
    yield put(systemAlbumCandidateRecieved(cid))
    const exists = yield albumsCollection.findOne(cid).exec()
    if (exists) {
      exists.lastSeen = lastSeen
      yield exists.save()
      yield put(systemAlbumUpdated(cid))
    } else {
      yield albumsCollection.insert({ cid, data, lastSeen })
      yield put(systemAlbumSaved(cid))
    }
  } catch (e) {
    console.error(e.message)
  }
}

function * startAlbumsReciever (args) {
  const { albumsGate } = args
  const albumsGateSource = yield call(gateToSagaChannel, albumsGate)
  yield takeEvery(albumsGateSource, handleIncomingGateAlbums, args)
}

export default startAlbumsReciever
