import Ajv from 'ajv'
import { albumInstanceSchema } from '~data/schemas'

const validateAlbum = (albumCandidate) => {
  const validator = new Ajv({
    allErrors: true
  })
  const valid = validator.validate(albumInstanceSchema, albumCandidate)
  return {
    valid, errors: validator.errors
  }
}

export default validateAlbum
