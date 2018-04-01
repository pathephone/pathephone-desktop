import streamToBlob from './streamToBlob'
import multihashToStream from './multihashToStream'

const multihashToUrl = async (multihash) => {
  const stream = await multihashToStream(multihash)
  if (Buffer.isBuffer(stream)) {
    return URL.createObjectURL(new Blob([stream], {type: 'application/octet-stream'}))
  }
  const blob = await streamToBlob(stream)
  return URL.createObjectURL(blob)
}

export default multihashToUrl
