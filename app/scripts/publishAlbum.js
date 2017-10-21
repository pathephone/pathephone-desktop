import { schemaCid } from '../schemas/metabin/album';
import { getIpfs } from '../api/ipfs';

const dagParams = { format: 'dag-cbor', hashAlg: 'sha3-512' };

const putAnAlbum = async (albumCandidate) => {
  const ipfsApi = await getIpfs();
  const cidObj = await ipfsApi.dag.put(albumCandidate, dagParams);
  const cidString = cidObj.toBaseEncodedString();
  console.log(`Returned cid: ${cidString}`);
  await ipfsApi.pubsub.publish(schemaCid, cidObj.multihash);
  return cidString;
};

export default putAnAlbum;
