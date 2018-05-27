const albumInstanceSchema = {
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
      type: 'string',
      minLength: 1
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
            minimum: 128 // минимальный битрейт трекров должен быть 128
          },
          hash: {
            type: 'string',
            minLength: 1
          }
        }
      }
    }
  }
}

export default albumInstanceSchema
