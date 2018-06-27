import Dexie from 'dexie'
import validateAlbum from '~utils/validateAlbum'

const DB_NAME = 'pathephone'

const getCustomDbApi = async () => {
  const db = new Dexie(DB_NAME)
  db
    .version(1)
    .stores({
      albumsCollection: '&cid, createdAt, lastSeenAt, *searchWords'
    })
  db.albumsCollection.hook('creating', (primary, obj) => {
    const { valid, errors } = validateAlbum(obj.data)
    if (valid) {
      const { title, artist } = obj.data
      const searchWords = [ title, artist ]
      obj.searchWords = searchWords
      obj.createdAt = new Date().getTime()
    } else {
      console.log(obj)
      console.error(errors)
      throw new Error('Album instance is invalid.')
    }
  })
  db.albumsCollection.hook('updating', (mod, prim, obj) => {
    const { createdAt, searchWords } = obj
    return { ...mod, createdAt, searchWords }
  })
  await db.open()
  return db
}

export default getCustomDbApi
