import { call, put } from 'redux-saga/effects'

import getCustomIpfsApi from './getApis/getCustomIpfsApi'
import getCustomDbApi from './getApis/getCustomDbApi'
import startAlbumsCollection from './getApis/startAlbumsCollection'
import getAlbumsGateApi from './getApis/getAlbumsGateApi'

import { systemAppStartProceed } from '~actions/system'
import getRestRemoteApis from './getApis/getRestRemoteApis'

function * getApis () {
  yield put(systemAppStartProceed(11))
  const [ dbApi, ipfsApi ] = yield [
    call(getCustomDbApi), call(getCustomIpfsApi)
  ]
  yield put(systemAppStartProceed(33))
  const [ albumsCollectionApi, albumsGateApi ] = yield [
    call(startAlbumsCollection, dbApi),
    call(getAlbumsGateApi, ipfsApi)
  ]
  yield put(systemAppStartProceed(44))

  const restRemoteApis = getRestRemoteApis()

  yield put(systemAppStartProceed(55))

  return {
    ...albumsCollectionApi,
    ...albumsGateApi,
    ...ipfsApi,
    ...restRemoteApis
  }
}

export default getApis
