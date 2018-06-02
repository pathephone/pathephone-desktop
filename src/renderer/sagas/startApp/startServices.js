import { call, all, spawn, put } from 'redux-saga/effects'

import asyncTimeout from '~utils/asyncTimeout'

import { systemAppStartProceed } from '#actions-system'

import startAlbumsReciever from './startServices/startAblumsReciever'
import startAlbumsPublisher from './startServices/startAlbumsPublisher'
import startAlbumsSharingService from './startServices/startAlbumsSharingService'
import startAlbumsDeletingService from './startServices/startAlbumsDeletingService'
import startDiscoverFeedService from './startServices/startDiscoverFeedService'
import startTracksCache from './startServices/startTracksCache'

function * startServices (apis) {
  yield put(systemAppStartProceed(66))
  yield all([
    spawn(startAlbumsReciever, apis),
    spawn(startAlbumsPublisher, apis),
    spawn(startAlbumsSharingService, apis),
    spawn(startAlbumsDeletingService, apis),
    spawn(startDiscoverFeedService, apis),
    spawn(startTracksCache, apis)
  ])
  yield put(systemAppStartProceed(100))
  yield call(asyncTimeout, 100)
}

export default startServices
