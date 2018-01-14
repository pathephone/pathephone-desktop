import getIpfsNode from '../api/ipfs'

const multihashToStream = async (multihash) => {
  const ipfsNode = await getIpfsNode()
  return ipfsNode.files.cat(multihash)
}

export default multihashToStream
