import dotProp from 'dot-prop-immutable'

import albumInstanceSchema from '~data/schemas/album/albumInstanceSchema'

const localFileSchema = { type: 'string', minLength: 1 }

let shareCandidateSchema = dotProp.set(
  albumInstanceSchema,
  'properties.cover.properties.image',
  localFileSchema
)

shareCandidateSchema = dotProp.set(
  shareCandidateSchema,
  'properties.tracks.items.properties.audio',
  localFileSchema
)

export default shareCandidateSchema
