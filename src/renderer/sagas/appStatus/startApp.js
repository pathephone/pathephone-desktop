import { fork, call, put } from 'redux-saga/effects'

import { reportAppStartProgress } from '#actions'

import { albumSchema } from '~data/schemas'

import startDb from './startApp/startDb'
import startIpfs from './startApp/startIpfs'
import openGate from './startApp/openGate'
import createDbCollection from './startApp/createDbCollection'
import startAlbumsProcess from './startApp/startAlbumsProcess'

function * startApp () {
  const [ dbApi, ipfsApi ] = yield [
    call(startDb), call(startIpfs)
  ]
  yield put(reportAppStartProgress, 33)
  const [ albumsCollection, albumsGate ] = yield [
    call(createDbCollection, { dbApi, schema: albumSchema, name: 'albums' }),
    call(openGate, { ipfsApi, schema: albumSchema })
  ]
  yield put(reportAppStartProgress, 66)
  yield fork(
    startAlbumsProcess, albumsGate, albumsCollection
  )
}

export default startApp
