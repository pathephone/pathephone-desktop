import { put, take } from 'redux-saga/effects'
import {
  systemAlbumCandidateRecieved,
  systemAlbumUpdated,
  systemAlbumSaved
} from '#actions-system'

function * startAlbumsCollectionReciever ({ albumsCollection, incomingAlbumsChannel }) {
  try {
    while (true) {
      const { cid, data } = yield take(incomingAlbumsChannel)
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
    }
  } catch (e) {
    console.error(e.message)
  }
}

export default startAlbumsCollectionReciever
