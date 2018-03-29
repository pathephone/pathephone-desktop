import getIpfs from '~app/api/ipfsApi'
import saveAlbumToDb from './saveAlbumToDb'
import albums from '~app/data/albums'

const dagParams = { format: 'dag-cbor', hashAlg: 'sha3-512' }

const publishAlbum = async (albumObj) => {
  const ipfsApi = getIpfs()
  const cidObj = await ipfsApi.dag.put(albumObj, dagParams)
  const cidString = cidObj.toBaseEncodedString()
  console.log(`Shared album cid: ${cidString}`)
  await saveAlbumToDb({ cid: cidString, data: albumObj, lastSeen: 0 })
  albums.gate.send(cidString)
}

export default publishAlbum
