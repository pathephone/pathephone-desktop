import { fork, call } from 'redux-saga/effects'

import { getDbApi, createDbCollection } from '~utils/rxdb'
import { getIpfsApi, openGate } from '~utils/ipfs'

import { albumInstanceSchema, albumCollectionSchema } from '~data/schemas'

import startAlbumsProcess from './startServices/startAlbumsProcess'

function * startServices () {
  const [ dbApi, ipfsApi ] = yield [
    call(getDbApi), call(getIpfsApi)
  ]
  const [ albumsCollection, albumsGate ] = yield [
    call(createDbCollection, { dbApi, schema: albumCollectionSchema, name: 'albums' }),
    call(openGate, { ipfsApi, schema: albumInstanceSchema })
  ]
  yield fork(
    startAlbumsProcess, { albumsGate, albumsCollection }
  )
}

export default startServices
