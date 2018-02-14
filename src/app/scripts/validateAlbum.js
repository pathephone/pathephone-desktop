import Ajv from 'ajv'
import albums from '../data/albums'

const validateAlbum = (albumCandidate) => {
  const validator = new Ajv({
    allErrors: true
  })
  const valid = validator.validate(albums.instanceSchema, albumCandidate)
  return {
    valid, errors: validator.errors
  }
}

export default validateAlbum
