const IPFS = require('ipfs');
// const dagParams = { format: 'dag-cbor', hashAlg: 'sha3-512' }
//const fetch = require('node-fetch')
// const IPFSapi = require('./src')

let node

const getIpfsNode = () => {
  if (node) return node;
  return new Promise((resolve, reject) => {
    node = new IPFS({
      EXPERIMENTAL: { // enable experimental features
        pubsub: true,
        // sharding: true, // enable dir sharding
        // dht: true // enable KadDHT, currently not interopable with go-ipfs
      }
    });

    node.on('ready', () => {
      // Your node is now ready to use \o/
      resolve(node);
    });
    node.on('error', console.error)
  });
};

/*
const getIpfsNode = (params = {}) => {
  if (node) return node
  const { host = 'localhost', port = '5001' } = params
  console.log('IPFS START')
  const dagGetEndpoint = `http://${host}:${port}/api/v0/dag/get`
  node = IPFSapi(host, port)

  node.dag.get = async (cidString) => {
    if (typeof cidString !== 'string') {
      throw new Error('Custom dag.get recieves only string cids.')
    }
    const res = await fetch(`${dagGetEndpoint}?arg=${cidString}`)
    if (res.status !== 200) {
      throw new Error(res.statusText)
    }
    const value = await res.json()
    return { value }
  }
  return node
}
*/

export default getIpfsNode
