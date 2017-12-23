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
    schema: albums.rxdbSchema
  })
}

export default initDb
