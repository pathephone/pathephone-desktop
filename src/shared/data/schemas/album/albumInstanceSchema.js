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
        image: {
          type: 'string',
          length: 46
        }
      },
      required: [ 'image' ]
    },
    tracks: {
      type: 'array',
      minItems: 1,
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
          audio: {
            type: 'string',
            length: 46
          }
        },
        required: [ 'title', 'artist', 'audio' ]
      }
    }
  },
  required: [ 'title', 'artist', 'tracks', 'cover' ]
}

export default albumInstanceSchema
