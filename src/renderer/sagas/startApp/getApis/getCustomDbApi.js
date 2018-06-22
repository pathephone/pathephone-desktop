import Dexie from 'dexie'

const DB_NAME = 'pathephone'

const getCustomDbApi = async () => {
  const db = new Dexie(DB_NAME)
  db
    .version(1)
    .stores({
      albumsCollection: '&cid, createdAt, lastSeenAt, *searchWords'
    })
  db.albumsCollection.hook('creating', (primary, obj) => {
    const { title, artist } = obj.data
    const searchWords = [ title, artist ]
    obj.searchWords = searchWords
    obj.createdAt = new Date().getTime()
  })
  await db.open()
  return db
}

export default getCustomDbApi
