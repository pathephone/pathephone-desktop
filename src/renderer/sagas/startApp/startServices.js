import { call, fork, spawn, put } from 'redux-saga/effects'

import { getDbApi, createDbCollection } from '~utils/rxdb'
import { getIpfsApi, openGate } from '~utils/ipfs'

import { albumInstanceSchema, albumCollectionSchema } from '~data/schemas'

import startAlbumsService from './startServices/startAlbumsService'
import startAudioService from './startServices/startAudioService'

import { appStartProgress } from '#actions'
import asyncTimeout from '~utils/asyncTimeout'

function * startServices () {
  const [ dbApi, ipfsApi ] = yield [
    call(getDbApi), call(getIpfsApi)
  ]
  yield put(appStartProgress(33))
  const [ albumsCollection, albumsGate ] = yield [
    call(createDbCollection, { dbApi, schema: albumCollectionSchema, name: 'albums' }),
    call(openGate, { ipfsApi, schema: albumInstanceSchema })
  ]
  yield put(appStartProgress(66))
  yield [
    fork(
      startAlbumsService, { albumsGate, albumsCollection }
    ),
    spawn(startAudioService)
  ]
  yield put(appStartProgress(100))
  yield call(asyncTimeout, 100)
}

export default startServices
