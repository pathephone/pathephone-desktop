import { call, take, spawn, put, all } from 'redux-saga/effects'
import gateToSagaChannel from '~utils/gateToSagaChannel'

function * startAlbumsGatePublisher ({ albumsGate, outcomingAlbumsChannel }) {
  try {
    while (true) {
      const album = yield take(outcomingAlbumsChannel)
      yield call(albumsGate.publish, album.cid)
    }
  } catch (error) {
    console.error(error)
  }
}

function * startAlbumsGateReciever ({ albumsGate, incomingAlbumsChannel }) {
  const albumsGateSource = yield call(gateToSagaChannel, albumsGate)
  try {
    while (true) {
      const album = yield take(albumsGateSource)
      yield put(incomingAlbumsChannel, album)
    }
  } catch (error) {
    console.error(error)
  }
}

function * startAlbumsGateService (args) {
  yield all([
    spawn(startAlbumsGatePublisher, args),
    spawn(startAlbumsGateReciever, args)
  ])
}

export default startAlbumsGateService
