import { spawn } from 'redux-saga/effects'

import startAlbumsReceiver from './startAlbumsService/startAlbumsReceiver'
import startAlbumsPublisher from './startAlbumsService/startAlbumsPublisher'

import getOutcomingAlbumsChannel from './startAlbumsService/getOutcomingAlbumsChannel'
import gateToSagaChannel from '~utils/gateToSagaChannel'

function * startAlbumsService ({ albumsGate, albumsCollection }) {
  const incomingAlbumsChannel = yield gateToSagaChannel(albumsGate)
  const outcomingAlbumsChannel = yield getOutcomingAlbumsChannel(albumsCollection)
  yield [
    spawn(startAlbumsReceiver, { incomingAlbumsChannel, albumsCollection }),
    spawn(startAlbumsPublisher, { outcomingAlbumsChannel, albumsCollection })
  ]
}

export default startAlbumsService
