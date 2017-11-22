import streamToBlob from './streamToBlob'
import multihashToStream from './multihashToStream'

const multihashToUrl = async (multihash) => {
  const stream = await multihashToStream(multihash)
  const blob = await streamToBlob(stream)
  return URL.createObjectURL(blob)
}

export default multihashToUrl
