import albums from '../data/albums'
import getIpfs from '../api/ipfs'
import getCidString from '../utils/getCidString'
import getMultihashBuffer from '../utils/getMultihashBuffer'
const dagParams = { format: 'dag-cbor', hashAlg: 'sha3-512' }

const publishAllAlbums = async () => {
  const IPFSnode = getIpfs()
  const { collection, schemaCid } = albums
  const documents = await collection.find().exec()
  documents.forEach((document) => {
    const { cid } = document
    const multihash = getMultihashBuffer(cid)
    IPFSnode.pubsub.publish(schemaCid, multihash)
  })
}

const peerIsNotMe = (from) => {
// TODO: check somehow peer
}

const initAlbumsListener = () => {
  const IPFSnode = getIpfs()
  const albumsListener = async (message) => {
    try {
      const { data, from } = message
      if (peerIsNotMe(from)) {
        const cidString = getCidString(data)
        console.log(`Album candidate received: ${cidString}.`)
        const existed = await albums.findOne({ cid: { $eq: cidString } }).exec()
        if (!existed) {
          const { value } = await IPFSnode.dag.get(cidString)
          await albums.insert({ cid: cidString, data: value })
          IPFSnode.pubsub.publish(cidString, data)
        } else {
          throw new Error(`Album ${cidString} already persisted in local db.`)
        }
      }
    } catch (e) {
      console.log(e)
    }
  }
  const { schemaCid } = albums
  IPFSnode.pubsub.subscribe(
    schemaCid, albumsListener
  )
}

const initIpfs = async () => {
  const IPFSnode = getIpfs()
  const cidObj = await IPFSnode.dag.put(albums.schema, dagParams)
  const cidString = cidObj.toBaseEncodedString()
  albums.schemaCid = cidString
  publishAllAlbums()
  console.log('INITIALISING LISTENERS')
  initAlbumsListener()
}

export default initIpfs
