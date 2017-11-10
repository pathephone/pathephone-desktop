import rxdbAlbumSchema from '../schemas/rxdb/album'
import getIpfs from '../api/ipfs'
import getDb from '../api/rxdb'
import getCidString from '../utils/getCidString'

const dagParams = { format: 'dag-cbor', hashAlg: 'sha3-512' }

const initIpfs = async () => {
  const IPFSnode = getIpfs()
  const { albums } = getDb()
  const { schema } = rxdbAlbumSchema
  const cidObj = await IPFSnode.dag.put(schema, dagParams)
  const cidString = cidObj.toBaseEncodedString()
  rxdbAlbumSchema.cidString = cidString
  console.log('INITIALISING LISTENERS')
  IPFSnode.pubsub.subscribe(
    cidString,
    async (message) => {
      try {
        const { data } = message
        const cidString = getCidString(data)
        console.log(`Album candidate received: ${cidString}`)
        const { value } = await IPFSnode.dag.get(cidString)
        albums.insert({ cid: cidString, data: value })
      } catch (e) {
        console.log(e)
      }
    }
  )
}

export default initIpfs
