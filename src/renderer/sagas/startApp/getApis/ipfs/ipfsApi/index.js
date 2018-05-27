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

export const startIpfsApi = (params = {}) => {
  const { host = 'localhost', port = '5001' } = params
  const endpoint = `http://${host}:${port}/api/v0`
  node = IPFSapi(host, port)
  node = dag(node, endpoint)
  node = exists(node)

  // исправляем баг с загрузкой
  const add = node.add
  node.add = (data) => new Promise(async (resolve) => {
    const r = await add(data)
    setTimeout(() => resolve(r), 1)
  })
  const put = node.dag.put
  node.dag.put = (a, b) => new Promise(async (resolve) => {
    const r = await put(a, b)
    setTimeout(() => resolve(r), 1)
  })
  // const addFromFs = node.util.addFromFs
  // node.util.addFromFs = (...args) => {
  //   if (args[2]) {
  //     return addFromFs(...args)
  //   }
  //   return new Promise((resolve, reject) => {
  //     addFromFs(...args, (err, data) => {
  //       console.log(err)
  //       console.log(data)
  //       if (err) {
  //         reject(err)
  //       } else {
  //         resolve(data)
  //       }
  //     })
  //   })
  // }
}

export default () => {
  if (!node) {
    throw new Error('You need to start IPFS api first.')
  }
  return node
}
