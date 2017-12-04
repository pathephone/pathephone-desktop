const IPFS = require('ipfs');
// const dagParams = { format: 'dag-cbor', hashAlg: 'sha3-512' }
//const fetch = require('node-fetch')

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
  const endpoint = `http://${host}:${port}/api/v0`
  node = IPFSapi(host, port)
  node = dag(node, endpoint)
  return node
}
*/

export default getIpfsNode
