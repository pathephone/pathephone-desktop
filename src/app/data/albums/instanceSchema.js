const instanceSchema = {
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
          hash: {
            type: 'string',
            minLength: 1
          }
        }
      }
    }
  }
}

export default instanceSchema
