// const IPFS = require('ipfs');
// const dagParams = { format: 'dag-cbor', hashAlg: 'sha3-512' }

import dag from './dag'
import IPFSapi from 'ipfs-api'
import exists from './exists'

let node

/*
export const getIpfs = () => {
  if (node) return node;
  return new Promise((resolve, reject) => {
    node = new IPFS();

    node.on('ready', () => {
      // Your node is now ready to use \o/
      resolve(node);
    });
  });
};
*/

export const startIpfsApi = (host = 'localhost', port = '5001') => {
  console.log('IPFS START')
  const endpoint = `http://${host}:${port}/api/v0`
  node = IPFSapi(host, port)
  node = dag(node, endpoint)
  node = exists(node)
}

const getIpfs = (params = {}) => {
  if (node) return node
  throw new Error('IPFS API has not been started.')
}

export default getIpfs
