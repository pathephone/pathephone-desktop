import getIpfs from '../api/ipfs'
import albums from '../data/albums'
import autoPublish from './autoPublish'

const dagParams = { format: 'dag-cbor', hashAlg: 'sha3-512' }

const publishAlbum = async (albumObj) => {
  const ipfsApi = await getIpfs()
  const cidObj = await ipfsApi.dag.put(albumObj, dagParams)
  const cidString = cidObj.toBaseEncodedString()
  console.log(`Returned cid: ${cidString}`)
  await ipfsApi.pubsub.publish(albums.schemaCid, cidObj.multihash)
  autoPublish(albums.schemaCid, cidString);
  return cidString
}

export default publishAlbum
