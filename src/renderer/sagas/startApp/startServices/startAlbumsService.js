import { channel } from 'redux-saga'
import { spawn, all, call } from 'redux-saga/effects'

import startAlbumsGateService from './startAlbumsService/startAlbumsGateService'
import startAlbumsCollectionService from './startAlbumsService/startAlbumsCollectionService'
import startAlbumFormService from './startAlbumsService/startAlbumFormService'

function * startAlbumsService (args) {
  const [ outcomingAlbumsChannel, incomingAlbumsChannel ] = yield all([
    call(channel), call(channel)
  ])
  const nextArgs = { ...args, outcomingAlbumsChannel, incomingAlbumsChannel }
  yield all([

    spawn(startAlbumsGateService, nextArgs),
    spawn(startAlbumsCollectionService, nextArgs),
    spawn(startAlbumFormService, nextArgs)
  ])
}

export default startAlbumsService
