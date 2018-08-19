import Ajv from 'ajv';
import albumInstanceSchema from '~shared/data/schemas/album/albumInstanceSchema';

const validateAlbum = (albumCandidate) => {
  const validator = new Ajv({
    allErrors: true,
  });
  const valid = validator.validate(albumInstanceSchema, albumCandidate);
  return {
    valid, errors: validator.errors,
  };
};

export default validateAlbum;
