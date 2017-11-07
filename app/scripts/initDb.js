import rxdbAlbumSchema from '../schemas/rxdb/album'
import getDb, { createDb } from '../api/rxdb'

const initIpfs = async () => {
  await createDb({
    name: 'pathephone',
    adapter: 'idb'
  })
  const db = getDb()
  await db.collection(rxdbAlbumSchema)
}

export default initIpfs
