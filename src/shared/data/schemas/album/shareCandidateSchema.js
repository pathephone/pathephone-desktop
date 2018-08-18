import dotProp from 'dot-prop-immutable';

import albumInstanceSchema from '~shared/data/schemas/album/albumInstanceSchema';

const localFileSchema = { type: 'string', minLength: 1 };

const tempShareCandidateSchema = dotProp.set(
  albumInstanceSchema,
  'properties.cover.properties.image',
  localFileSchema,
);

const shareCandidateSchema = dotProp.set(
  tempShareCandidateSchema,
  'properties.tracks.items.properties.audio',
  localFileSchema,
);

export default shareCandidateSchema;
