import { call, all, spawn, put } from 'redux-saga/effects'

import asyncTimeout from '~utils/asyncTimeout'

import { systemAppStartProceed } from '#actions-system'

import startAlbumsReciever from './startServices/startAblumsReciever'
import startAlbumsPublisher from './startServices/startAlbumsPublisher'
import startAlbumsSharingService from './startServices/startAlbumsSharingService'
import startAlbumsDeletingService from './startServices/startAlbumsDeletingService'
// import startAudioService from './startServices/startAudioService'
import startDiscoverFeedService from './startServices/startDiscoverFeedService'
import startTracksCache from './startServices/startTracksCache'
// import startPlaybackService from './startServices/startPlaybackService'

function * startServices (args) {
  yield put(systemAppStartProceed(66))
  yield all([
    spawn(startAlbumsReciever, args),
    spawn(startAlbumsPublisher, args),
    spawn(startAlbumsSharingService, args),
    spawn(startAlbumsDeletingService, args),
    // spawn(startAudioService, args),
    spawn(startDiscoverFeedService, args),
    spawn(startTracksCache, args)
    // spawn(startPlaybackService, args)
  ])
  yield put(systemAppStartProceed(100))
  yield call(asyncTimeout, 100)
}

export default startServices
