import RxDB from 'rxdb'
import IDBadapter from 'pouchdb-adapter-idb'

const options = {
  name: 'pathephone',
  adapter: 'idb'
}

RxDB.plugin(IDBadapter)

export const getDbApi = () => RxDB.create(options)

export const createDbCollection = ({ dbApi, schema, name }) => (
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
