import albums from '../data/albums'
import getIpfs from '../api/ipfs'
import getCidString from '../utils/getCidString'
import autoPublish, { defaultPublishInterval } from './autoPublish'
const dagParams = { format: 'dag-cbor', hashAlg: 'sha3-512' }


const publishAllAlbums = async () => {
  const ipfsNode = getIpfs()
  const { collection, schemaCid } = albums
  const documents = await collection.find().exec()
  documents.map((document, index) => {
    const { cid } = document
    setTimeout(() => autoPublish(schemaCid, cid), defaultPublishInterval * index/documents.length)
  })
}

const messageIsNotFromMe = (from) => {
// TODO: check somehow peer
  return true
}

const albumsListener = async (message) => {
  console.log(message)
  try {
    const ipfsNode = getIpfs()
    const { data, from } = message
    if (messageIsNotFromMe(from)) {
      const cidString = getCidString(data)
      console.log(`Album candidate received: ${cidString}.`)
      const existed = await albums.collection
        .findOne({ cid: { $eq: cidString } })
        .exec()
      if (!existed) {
        const { value } = await ipfsNode.dag.get(cidString)
        await albums.collection.insert({ cid: cidString, data: value })
        autoPublish(albums.schemaCid, cidString)
      } else {
        throw new Error(`Album ${cidString} already persisted in local db.`)
      }
    }
  } catch (e) {
    console.log(e)
  }
}

const initAlbumsListener = async () => {
  const ipfsNode = getIpfs()
  const { schemaCid } = albums
  await ipfsNode.pubsub.subscribe(
    schemaCid, albumsListener
  )
}

const publishAlbumSchema = async () => {
  const ipfsNode = getIpfs()
  const { schema } = albums
  const cidObj = await ipfsNode.dag.put(schema, dagParams)
  const cidString = cidObj.toBaseEncodedString()
  albums.schemaCid = cidString
}

const initIpfs = async () => {
  console.log('PUBLISHING ALBUM SCHEMA')
  await publishAlbumSchema()
  console.log('PUBLISHING ALBUMS FROM DB')
  publishAllAlbums()
  console.log('INITIALISING LISTENER')
  initAlbumsListener()
}

export default initIpfs
