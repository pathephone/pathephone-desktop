import { call, put, takeEvery } from 'redux-saga/effects'

import { IS_OFFLINE } from '#config'

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
  if (!IS_OFFLINE) {
    const incomingAlbumsSource = yield call(apis.getIncomingAlbumsSource)
    yield takeEvery(incomingAlbumsSource, handleIncomingAlbums, apis)
  }
}

export default startAlbumsReciever
