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

const getIpfsNode = (params = {}) => {
  if (node) return node
  const { host = 'localhost', port = '5001' } = params
  console.log('IPFS START')
  const endpoint = `http://${host}:${port}/api/v0`
  node = IPFSapi(host, port)
  node = dag(node, endpoint)
  node = exists(node)

  // исправляем баг с загрузкой
  const add = node.add
  node.add = (data) => new Promise((resolve) => {
    const r = add(data)
    setTimeout(() => resolve(r), 30)
  })
  const put = node.dag.put
  node.dag.put = (a, b) => new Promise((resolve) => {
    const r = put(a, b)
    setTimeout(() => resolve(r), 30)
  })

  return node
}

export default getIpfsNode
