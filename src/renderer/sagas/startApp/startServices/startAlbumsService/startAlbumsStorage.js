import { put, take } from 'redux-saga/effects'

import {
  reportAlbumCandidate,
  reportAlbumDublicate,
  reportAlbumNew,
  reportAlbumListenerError
} from '#actions'

function * startAlbumStorage ({ albumsCollection }) {
  while (true) {
    const album = yield take(reportAlbumCandidate)
    const { cid, data, lastSeen } = album
    try {
      const exists = yield albumsCollection.findOne(cid).exec()
      if (exists) {
        exists.lastSeen = lastSeen
        yield exists.save()
        yield put(reportAlbumDublicate(cid))
      } else {
        yield albumsCollection.insert({ cid, data, lastSeen })
        yield put(reportAlbumNew(cid))
      }
    } catch (message) {
      yield put(reportAlbumListenerError(message))
    }
  }
}

export default startAlbumStorage
