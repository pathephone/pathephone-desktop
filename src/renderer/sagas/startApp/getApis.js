import { call, put } from 'redux-saga/effects'
import { albumInstanceSchema, albumCollectionSchema } from '~data/schemas'

import { systemAppStartProceed } from '#actions-system'

import { getDbApi, createDbCollection } from './startApis/rxdb'
import { getIpfsApi, openGate } from './startApis/ipfs'
import { dagParams } from '~data/config'

function * getApis () {
  const [ dbApi, ipfsApi ] = yield [
    call(getDbApi), call(getIpfsApi)
  ]
  yield put(systemAppStartProceed(33))
  const [ albumsCollection, albumsGate ] = yield [
    call(createDbCollection, { dbApi, schema: albumCollectionSchema, name: 'albums' }),
    call(openGate, { ipfsApi, schema: albumInstanceSchema })
  ]
  const saveAlbumToCollection = ({ cid, data, lastSeen = 0 }) => {
    return albumsCollection.insert({ cid, data, lastSeen })
  }
  const shareObjectToIpfs = async obj => {
    const cidObj = await ipfsApi.dag.put(obj, dagParams)
    return cidObj.toBaseEncodedString()
  }
  return {
    dbApi,
    ipfsApi,
    albumsCollection,
    albumsGate,
    saveAlbumToCollection,
    shareObjectToIpfs
  }
}

export default getApis
