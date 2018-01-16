const IPFS = require('ipfs')

let node

export const getIpfs = () => {
  if (node) return node
  return new Promise((resolve, reject) => {
    node = new IPFS({
      EXPERIMENTAL: {
        pubsub: true
      }
    })

    node.on('ready', () => {
      // Your node is now ready to use \o/
      resolve(node)
    })
  })
}

export default getIpfs
