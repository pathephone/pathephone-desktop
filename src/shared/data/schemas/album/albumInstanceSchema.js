const CIDv0Schema = {
  type: 'string',
  pattern: '^(Qm)[1-9A-HJ-NP-Za-km-z]{44}$'
}

const albumInstanceSchema = {
  type: 'object',
  properties: {
    title: {
      type: 'string',
      minLength: 1,
      maxLength: 100
    },
    artist: {
      type: 'string',
      minLength: 1,
      maxLength: 100
    },
    cover: {
      type: 'object',
      properties: {
        image: CIDv0Schema
      },
      required: [ 'image' ]
    },
    tracks: {
      type: 'array',
      minItems: 1,
      maxItems: 100,
      items: {
        type: 'object',
        properties: {
          title: {
            type: 'string',
            minLength: 1,
            maxLength: 100
          },
          artist: {
            type: 'string',
            minLength: 1,
            maxLength: 100
          },
          audio: CIDv0Schema
        },
        required: [ 'title', 'artist', 'audio' ]
      }
    }
  },
  required: [ 'title', 'artist', 'tracks', 'cover' ]
}

export default albumInstanceSchema
