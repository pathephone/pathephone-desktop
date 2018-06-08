const shareCandidateSchema = {
  type: 'object',
  properties: {
    title: {
      type: 'string',
      minLength: 1
    },
    artist: {
      type: 'string',
      minLength: 1
    },
    cover: {
      anyOf: [
        {
          type: 'string',
          minLength: 1
        },
        {
          type: 'object'
        }
      ]
    },
    tracks: {
      type: 'array',
      minItems: 1,
      items: {
        type: 'object',
        properties: {
          title: {
            type: 'string',
            minLength: 1
          },
          artist: {
            type: 'string',
            minLength: 1
          },
          bitrate: {
            type: 'number',
            minimum: 128
          },
          file: {
            type: 'object'
          }
        },
        required: [ 'title', 'artist', 'bitrate', 'file' ]
      }
    }
  },
  required: [ 'title', 'artist', 'tracks', 'cover' ]
}

export default shareCandidateSchema
