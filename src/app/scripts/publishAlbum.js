import getIpfs from '../api/ipfsApi'
import saveAlbumToDb from './saveAlbumToDb'

const dagParams = { format: 'dag-cbor', hashAlg: 'sha3-512' }

const publishAlbum = async (albumObj) => {
  const ipfsApi = await getIpfs()
  const cidObj = await ipfsApi.dag.put(albumObj, dagParams)
  const cidString = cidObj.toBaseEncodedString()
  console.log(`Shared album cid: ${cidString}`)
  await saveAlbumToDb({ cid: cidString, data: albumObj })
}

export default publishAlbum
