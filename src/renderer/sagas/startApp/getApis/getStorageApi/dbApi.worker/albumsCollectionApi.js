import Dexie from 'dexie'
import { IPC_ALBUMS_STREAMED } from '~data/ipcTypes'

// UTILS

function findAlbumsByText (dbApis, { text, limit }) {
  const { albumsCollection } = dbApis
  return dbApis.transaction('r', albumsCollection, function * () {
    const prefixes = text.split(' ')
    // Parallell search for all prefixes - just select resulting primary keys
    const results = yield Dexie.Promise.all(prefixes.map(prefix =>
      albumsCollection
        .where('searchWords')
        .startsWithIgnoreCase(prefix)
        .primaryKeys()))
    // Intersect result set of primary keys
    const reduced = results
      .reduce((a, b) => {
        const set = new Set(b)
        return a.filter(k => set.has(k))
      })

    // Finally select entire documents from intersection
    return yield albumsCollection
      .where(':id')
      .anyOf(reduced)
      .limit(limit)
      .sortBy('createdAt')
  })
}

function findLatestAlbums (dbApis, { limit }) {
  return dbApis.albumsCollection
    .orderBy('createdAt')
    .reverse()
    .limit(limit)
    .toArray()
}

// API METHODS

export const findAlbumInCollectionByCid = (dbApis, cid) => {
  const { albumsCollection } = dbApis
  return albumsCollection
    .get(cid)
    .toArray()
}

export const findAlbumsInCollectionByCids = (dbApis, cids) => {
  const { albumsCollection } = dbApis
  return albumsCollection
    .where('cid')
    .anyOf(cids)
    .toArray()
}

export const deleteAlbumsFromCollection = (dbApis, cids) => {
  const { albumsCollection } = dbApis
  return albumsCollection
    .where('cid')
    .anyOf(cids)
    .delete()
}
export const findOutdatedAlbumsInCollection = (dbApis, period) => {
  return dbApis.albumsCollection
    .where('lastSeenAt')
    .below(period)
    .limit(100)
    .toArray()
}
export const saveAlbumIfNotExists = async (dbApis, { cid, data, lastSeenAt = 0 }) => {
  return dbApis.albumsCollection
    .add({ cid, data, lastSeenAt })
}
export const saveOrUpdateAlbum = (dbApis, { cid, data, lastSeenAt }) => {
  return dbApis.albumsCollection
    .put({ cid, data, lastSeenAt })
}

let closeStream = null

export const openAlbumsStream = (dbApis, params) => {
  if (closeStream) {
    closeStream()
  }
  const { albumsCollection } = dbApis
  const makeQuery = async () => {
    try {
      let collection
      if (params.text) {
        collection = findAlbumsByText(dbApis, params)
      } else {
        collection = findLatestAlbums(dbApis, params)
      }
      const albums = await collection
      postMessage({
        payload: albums,
        type: IPC_ALBUMS_STREAMED
      })
    } catch (e) {
      postMessage({
        errorMessage: e.message,
        type: IPC_ALBUMS_STREAMED
      })
    }
  }
  makeQuery()
  const handleUpdate = (...args) => {
    args[2].on('complete', makeQuery)
  }
  albumsCollection.hook('deleting', handleUpdate)
  closeStream = () => {
    albumsCollection.hook('deleting').unsubscribe(handleUpdate)
  }
}

export const closeAlbumsStream = () => {
  closeStream()
  closeStream = null
}
