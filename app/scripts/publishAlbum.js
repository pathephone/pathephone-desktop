import Ajv from 'ajv';
import { schemaObj, schemaCid } from '../schemas/album';
import { getIpfs } from '../api/ipfs';

const dagParams = { format: 'dag-cbor', hashAlg: 'sha3-512' };

const putAnAlbum = async (albumCandidate) => {
  const validator = new Ajv();
  const valid = validator.validate(schemaObj, albumCandidate);
  if (valid) {
    const ipfsApi = getIpfs();
    const cidObj = await ipfsApi.dag.put(albumCandidate, dagParams);
    console.log(`aded to ipfs: ${cidObj.toBaseEncodedString()}`);
    await ipfsApi.pubsub.publish(schemaCid, cidObj.multihash);
    return { ok: true }
  } 
    return {
      validatorErrors: validator.errors
    };
  
};

export default putAnAlbum;
