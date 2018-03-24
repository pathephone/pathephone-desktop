import getIpfsNode from '../api/ipfsApi'

const multihashToStream = (multihash) => {
  const ipfsNode = getIpfsNode()
  return ipfsNode.files.cat(multihash)
}

export default multihashToStream
