import albums from '../data/albums'
import getDb, { createDb } from '../api/rxdb'

const initDb = async () => {
  await createDb({
    name: 'pathephone',
    adapter: 'idb'
  })
  const db = getDb()
  albums.collection = await db.collection({
    name: 'albums',
    schema: albums.rxdbSchema,
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
}

export default initDb
