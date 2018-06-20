import Ajv from 'ajv'
import { albumSchema } from '~data/schemas'

const normalizeDataPath = dataPath => {
  const noDot = dataPath.slice(1, dataPath.length)
  return noDot
    .replace('[', '.')
    .replace(']', '')
}

const normalizeErrors = errors => (
  errors.reduce((acc, { dataPath, message }) => {
    acc[normalizeDataPath(dataPath)] = message
    return acc
  }, {})
)

const validateShareCandidate = (candidate) => {
  const validator = new Ajv({
    allErrors: true
  })
  const valid = validator.validate(albumSchema.shareCandidateSchema, candidate)
  if (!valid) {
    return normalizeErrors(validator.errors)
  }
}

export default validateShareCandidate
