import getRxDBApi from './getCustomDbApi/rxdb'

const getCustomDbApi = async () => {
  const dbApi = await getRxDBApi()
  const createCollection = ({ schema, name }) => (
    dbApi.collection({
      name,
      schema,
      migrationStrategies: {
        1: function (oldDoc) {
          return null
        },
        2: function (oldDoc) {
          oldDoc.lastSeen = new Date().getTime()
          return oldDoc
        },
        3: function (oldDoc) {
          delete oldDoc._id
          return oldDoc
        }
      }
    })
  )
  return { createCollection }
}

export default getCustomDbApi
