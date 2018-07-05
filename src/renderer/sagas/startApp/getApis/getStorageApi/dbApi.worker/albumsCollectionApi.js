import Dexie from 'dexie'

export * from './albumsCollectionApi/albumsStreamApi'

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
  return dbApis.transaction('rw', dbApis.albumsCollection, async () => {
    await dbApis.albumsCollection.bulkDelete(cids)
    console.log(`Done deleteing ${cids.length} albums from collection.`)
    const albumsCount = await dbApis.albumsCollection.count()
    return { albumsCount }
  })
}

export const findOutdatedAlbumsInCollection = (dbApis, period) => {
  return dbApis.albumsCollection
    .where('lastSeenAt')
    .below(period)
    .limit(100)
    .toArray()
}

export const saveAlbumIfNotExists = async (dbApis, { cid, data, lastSeenAt = 0 }) => {
  return dbApis.transaction('rw', dbApis.albumsCollection, async () => {
    await dbApis.albumsCollection.add({ cid, data, lastSeenAt })
    console.log(`Done saving ${cid} album to collection.`)
    const albumsCount = await dbApis.albumsCollection.count()
    return { albumsCount }
  })
}

export const saveOrUpdateAlbum = (dbApis, { cid, data, lastSeenAt }) => {
  return dbApis.transaction('rw', dbApis.albumsCollection, async () => {
    await dbApis.albumsCollection.put({ cid, data, lastSeenAt })
    console.log(`Done putting ${cid} album to collection.`)
    const albumsCount = await dbApis.albumsCollection.count()
    return { albumsCount }
  })
}

export const saveOrUpdateAlbums = (dbApis, albums) => {
  return dbApis.transaction('rw', dbApis.albumsCollection, async () => {
    try {
      await dbApis.albumsCollection.bulkPut(albums)
      console.log(`Done putting ${albums.length} albums to collection.`)
    } catch (e) {
      if (e instanceof Dexie.BulkError) {
        console.error(`Some albums did not succeed. However, ${
          albums.length - e.failures.length
        } albums was added successfully.`)
      } else {
        throw e
      }
    }
    const [ albumsCount, latestAlbum ] = await Dexie.Promise.all(
      [
        dbApis.albumsCollection.count(),
        dbApis.albumsCollection.orderBy('createdAt').reverse().first()
      ]
    )
    return { albumsCount, latestCid: latestAlbum.cid }
  })
}

export const getAlbumsCollectionInfo = async (dbApis) => {
  const albumsCount = await dbApis.albumsCollection.count()
  return { albumsCount }
}
