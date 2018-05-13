import { channel } from 'redux-saga'
import { spawn, all, call } from 'redux-saga/effects'

import startAlbumsGateService from './startAlbumsService/startAlbumsGateService'
import startAlbumsCollectionService from './startAlbumsService/startAlbumsCollectionService'
// import startAlbumFormService from './startAlbumsService/startAlbumFormService'
import startAlbumsSharingService from './startAlbumsService/startAlbumsSharingService'
import startAlbumsFeedService from './startAlbumsService/startAlbumsFeedService'

function * startAlbumsService (args) {
  const [ outcomingAlbumsChannel, incomingAlbumsChannel ] = yield all([
    call(channel), call(channel)
  ])
  const nextArgs = { ...args, outcomingAlbumsChannel, incomingAlbumsChannel }
  yield all([
    spawn(startAlbumsGateService, nextArgs),
    spawn(startAlbumsCollectionService, nextArgs),
    // spawn(startAlbumFormService, nextArgs),
    spawn(startAlbumsSharingService, nextArgs),
    spawn(startAlbumsFeedService, nextArgs)
  ])
}

export default startAlbumsService
