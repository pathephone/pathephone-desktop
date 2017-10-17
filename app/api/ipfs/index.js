// const IPFS = require('ipfs');
// const dagParams = { format: 'dag-cbor', hashAlg: 'sha3-512' }
const fetch = require('node-fetch');
const IPFSapi = require('./src');

const dagGetEndpoint = 'http://localhost:5001/api/v0/dag/get';
let node;

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

export const getIpfs = () => {
  if (node) return node;

  node = IPFSapi();

  node.dag.get = async (cidString) => {
    if (typeof cidString !== 'string') {
      throw new Error('Custom dag.get recieves only string cids.');
    }
    const res = await fetch(`${dagGetEndpoint}?arg=${cidString}`);
    if (res.status !== 200) {
      throw new Error(res.statusText);
    }
    const value = await res.json();
    return { value };
  };
  return node;
};
