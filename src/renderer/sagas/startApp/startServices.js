import { call, fork, spawn, put } from 'redux-saga/effects'

import { getDbApi, createDbCollection } from '~utils/rxdb'
import { getIpfsApi, openGate } from '~utils/ipfs'

import { albumInstanceSchema, albumCollectionSchema } from '~data/schemas'

import startAlbumsService from './startServices/startAlbumsService'
import startAudioService from './startServices/startAudioService'

import asyncTimeout from '~utils/asyncTimeout'
import { systemAppStartProceed } from '#actions-system'

function * startServices () {
  const [ dbApi, ipfsApi ] = yield [
    call(getDbApi), call(getIpfsApi)
  ]
  yield put(systemAppStartProceed(33))
  console.log('AAAAAAAAAA')
  const [ albumsCollection, albumsGate ] = yield [
    call(createDbCollection, { dbApi, schema: albumCollectionSchema, name: 'albums' }),
    call(openGate, { ipfsApi, schema: albumInstanceSchema })
  ]
  yield put(systemAppStartProceed(66))
  yield [
    fork(
      startAlbumsService, { albumsGate, albumsCollection, ipfsApi }
    ),
    spawn(startAudioService)
  ]
  yield put(systemAppStartProceed(100))
  yield call(asyncTimeout, 100)
}

export default startServices
