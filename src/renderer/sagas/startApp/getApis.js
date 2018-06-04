import { call, put } from 'redux-saga/effects'

import getCustomIpfsApi from './getApis/getCustomIpfsApi'
import getCustomDbApi from './getApis/getCustomDbApi'
import startAlbumsCollection from './getApis/startAlbumsCollection'
import startAlbumsGate from './getApis/startAlbumsGate'

import { systemAppStartProceed } from '#actions-system'

function * getApis () {
  yield put(systemAppStartProceed(11))
  const [ dbApi, ipfsApi ] = yield [
    call(getCustomDbApi), call(getCustomIpfsApi)
  ]
  yield put(systemAppStartProceed(33))
  const [ albumsCollectionApi, albumsGateApi ] = yield [
    call(startAlbumsCollection, dbApi),
    call(startAlbumsGate, ipfsApi)
  ]

  return {
    ...albumsCollectionApi,
    ...albumsGateApi,
    ...ipfsApi
  }
}

export default getApis
