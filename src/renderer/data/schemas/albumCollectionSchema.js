import instanceSchema from './albumInstanceSchema'

const albumCollectionSchema = {
  title: 'album',
  version: 3, // <- incremental version-number
  type: 'object',
  properties: {
    cid: {
      type: 'string',
      minLength: 1,
      primary: true
    },
    data: instanceSchema,
    lastSeen: {
      type: 'number'
    }
  }
}

export default albumCollectionSchema
