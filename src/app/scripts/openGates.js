import { openGate } from '@metabin/gate'
import getIpfsApi from '~/api/ipfsApi'
import albums from '~/data/albums'

const albumsListener = async (data, cid) => {
  const lastSeen = new Date().getTime()
  console.log(`-- album candidate received ${cid}`)
  try {
    const exists = await albums.collection.findOne(cid).exec()
    if (exists) {
      exists.lastSeen = lastSeen
      await exists.save()
      console.log(`-- existing album successfully updated ${cid}`)
    } else {
      await albums.collection.insert({ cid, data, lastSeen })
      console.log(`-- new album successfully saved ${cid}`)
    }
  } catch (error) {
    console.error(error)
  }
}

const handleEachAlbum = (album) => {
  console.log(`-- publish album ${album.cid}`)
  albums.gate.send(album.cid)
    .catch(console.error)
}

const publishAlbums = async () => {
  console.log('PUBLISHING')
  const period = new Date().getTime() - albums.apearenceInterval
  const documents = await albums.collection.find({ lastSeen: { $lt: period } }).exec()
  documents.forEach(handleEachAlbum)
}

const openGates = async () => {
  const ipfsApi = getIpfsApi()
  albums.gate = await openGate(ipfsApi, albums.instanceSchema)
  albums.stopAlbumsGateListener = await albums.gate.listen(albumsListener)
  publishAlbums()
  setInterval(publishAlbums, albums.publishInterval)
}

export default openGates
