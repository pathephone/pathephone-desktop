import { call, put } from 'redux-saga/effects'

import gateToSagaChannel from '~utils/gateToSagaChannel'

import { dagParams } from '~data/config'
import { albumInstanceSchema, albumCollectionSchema } from '~data/schemas'

import { getDbApi, createDbCollection } from './getApis/rxdb'
import { getIpfsApi, openGate } from './getApis/ipfs'

import { systemAppStartProceed } from '#actions-system'

function * getApis () {
  const [ dbApi, ipfsApi ] = yield [
    call(getDbApi), call(getIpfsApi)
  ]
  yield put(systemAppStartProceed(33))
  const [ albumsCollection, albumsGate ] = yield [
    call(createDbCollection, { dbApi, schema: albumCollectionSchema, name: 'albums' }),
    call(openGate, { ipfsApi, schema: albumInstanceSchema })
  ]
  const findAlbumInCollectionByCid = async cid => {
    const album = await albumsCollection.findOne(cid).exec()
    if (album) {
      return {
        update (data) {
          for (const [key, value] of Object.entries(data)) {
            album[key] = value
          }
          return album.save()
        }
      }
    }
  }
  const findOutdatedAlbumsInCollection = (period) => {
    return albumsCollection.find({ lastSeen: { $lt: period } }).exec()
  }
  const saveAlbumToCollection = ({ cid, data, lastSeen = 0 }) => {
    return albumsCollection.insert({ cid, data, lastSeen })
  }
  const shareObjectToIpfs = async obj => {
    const cidObj = await ipfsApi.dag.put(obj, dagParams)
    return cidObj.toBaseEncodedString()
  }
  const shareFsFileToIpfs = async file => {
    const output = await ipfsApi.util.addFromFs(file)
    return output[0].hash
  }
  const publishAlbumByCid = cid => {
    return albumsGate.send(cid)
  }
  const incomingAlbumsSource = yield call(gateToSagaChannel, albumsGate)
  return {
    dbApi,
    ipfsApi,
    albumsCollection,
    albumsGate,
    saveAlbumToCollection,
    findAlbumInCollectionByCid,
    findOutdatedAlbumsInCollection,
    shareObjectToIpfs,
    shareFsFileToIpfs,
    incomingAlbumsSource,
    publishAlbumByCid
  }
}

export default getApis
