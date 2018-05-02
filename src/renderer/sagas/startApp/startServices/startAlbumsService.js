import { spawn, all } from 'redux-saga/effects'

import gateToSagaChannel from '~utils/gateToSagaChannel'

import startAlbumsPublisher from './startAlbumsService/startAlbumsPublisher'
import startAlbumsStorage from './startAlbumsService/startAlbumsStorage'
import startIncomingAlbumsHandler from './startAlbumsService/startIncomingAlbumsHandler'
import startOutcomingAlbumsHandler from './startAlbumsService/startOutcomingAlbumsHandler'

import getOutcomingAlbumsChannel from './startAlbumsService/getOutcomingAlbumsChannel'

function * startAlbumsService ({ albumsGate, albumsCollection }) {
  yield all([
    spawn(startAlbumsPublisher, { albumsGate }),
    spawn(startAlbumsStorage, { albumsCollection })
  ])
  const incomingAlbumsChannel = yield gateToSagaChannel(albumsGate)
  const outcomingAlbumsChannel = yield getOutcomingAlbumsChannel(albumsCollection)
  yield all([
    spawn(startIncomingAlbumsHandler, { incomingAlbumsChannel }),
    spawn(startOutcomingAlbumsHandler, { outcomingAlbumsChannel })
  ])
}

export default startAlbumsService
