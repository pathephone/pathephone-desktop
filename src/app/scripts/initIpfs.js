import albums from '../data/albums'
import getIpfs from '../api/ipfs'
import getCidString from '../utils/getCidString'
import autoPublish from './autoPublish'
const dagParams = { format: 'dag-cbor', hashAlg: 'sha3-512' }


const publishAllAlbums = async () => {
  const ipfsNode = getIpfs()
  const { collection, schemaCid } = albums
  const documents = await collection.find().exec()
  return Promise.all(
    documents.map(async (document) => {
      const { cid } = document
      return await autoPublish(schemaCid, cid)
    })
  )
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
        ipfsNode.pubsub.publish(cidString, data)
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
