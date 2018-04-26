import { put } from 'redux-saga/effects'

import {
  reportAlbumCandidate,
  reportAlbumDublicate,
  reportAlbumNew,
  reportAlbumListenerError
} from '#actions'

function * albumsListener ({ album, albumsCollection }) {
  const { cid, data } = album
  const lastSeen = new Date().getTime()
  yield put(reportAlbumCandidate(cid))
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

export default albumsListener
