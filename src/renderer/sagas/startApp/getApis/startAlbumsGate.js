import gateToSagaChannel from '~utils/gateToSagaChannel'

import { albumInstanceSchema } from '~data/schemas'

const startAlbumsGate = async ipfsApis => {
  const { openMetabinGate } = ipfsApis
  const albumsGate = await openMetabinGate(albumInstanceSchema)

  const publishAlbumByCid = cid => {
    return albumsGate.send(cid)
  }
  const getIncomingAlbumsSource = () => {
    return gateToSagaChannel(albumsGate)
  }
  return {
    publishAlbumByCid,
    getIncomingAlbumsSource
  }
}

export default startAlbumsGate
