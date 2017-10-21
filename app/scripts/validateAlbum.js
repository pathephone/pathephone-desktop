import Ajv from 'ajv';
import isIpfs from 'is-ipfs';
import { schemaObj } from '../schemas/metabin/album';

const validateAlbum = (albumCandidate) => {
  const validator = new Ajv({
    allErrors: true
  });
  let valid;
  const validatorErrors = [];
  valid = validator.validate(schemaObj, albumCandidate);
  if (!valid) {
    validatorErrors.push(...validator.errors);
  }
  const { cover, tracks } = albumCandidate;
  const coverIsMultihash = isIpfs.multihash(cover);
  if (!coverIsMultihash) {
    valid = false;
    validatorErrors.push({
      dataPath: '.cover',
      message: "Must be a multihash value."
    });
  }
  tracks.forEach(({ hash }, index) => {
    const isMultihash = isIpfs.multihash(hash);
    if (!isMultihash) {
      valid = false;
      validatorErrors.push({
        dataPath: `tracks[${index}].hash`,
        message: "Must be a multihash value."
      });
    }
  });
  return {
    valid, validatorErrors
  };
};

export default validateAlbum;
