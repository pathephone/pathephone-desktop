import streamToBlob from './streamToBlob'
import multihashToStream from './multihashToStream'
import { setTimeout } from 'core-js/library/web/timers'

const asyncTimeout = (timeout) => new Promise(
  resolve => setTimeout(resolve, timeout)
)

const multihashToUrl = async (multihash) => {
  await asyncTimeout(1000)
  const stream = await multihashToStream(multihash)
  if (Buffer.isBuffer(stream)) {
    return URL.createObjectURL(new Blob([stream], {type: 'application/octet-stream'}))
  }
  const blob = await streamToBlob(stream)
  return URL.createObjectURL(blob)
}

export default multihashToUrl
