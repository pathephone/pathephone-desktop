const schemaObj = {
  title: 'album',
  version: 0, // <- incremental version-number
  type: 'object',
  properties: {
    title: {
      type: 'string'
    },
    artist: {
      type: 'string'
    },
    cover: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          hash: {
            type: 'string'
          },
          size: {
            type: 'number'
          }
        }
      }
    }
  }
};

const collectionName = 'albums';

export default { schemaObj, collectionName };
