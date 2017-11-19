import getIpfsNode from '../api/ipfs'

const multihashToStream = (multihash) => {
  const ipfsNode = getIpfsNode()
  return ipfsNode.files.cat(multihash)
}

export default multihashToStream
