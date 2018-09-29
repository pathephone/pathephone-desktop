import Dexie from 'dexie';
import printRenderer from '~shared/utils/printRenderer';

export * from './albumsCollectionApi/albumsStreamApi';

// API METHODS

export const findAlbumInCollectionByCid = (dbApis, cid) => {
  const { albumsCollection } = dbApis;
  return albumsCollection
    .get(cid)
    .toArray();
};

export const findAlbumsInCollectionByCids = (dbApis, cids) => {
  const { albumsCollection } = dbApis;
  return albumsCollection
    .where('cid')
    .anyOf(cids)
    .toArray();
};

export const deleteAlbumsFromCollection = (dbApis, cids) => dbApis.transaction('rw', dbApis.albumsCollection, async () => {
  await dbApis.albumsCollection.bulkDelete(cids);
  printRenderer.log(`Done deleteing ${cids.length} albums from collection.`);
  const albumsCount = await dbApis.albumsCollection.count();
  return { albumsCount };
});

export const findOutdatedAlbumsInCollection = (dbApis, period) => dbApis.albumsCollection
  .where('lastSeenAt')
  .below(period)
  .limit(100)
  .toArray();

export const saveAlbumIfNotExists = async (dbApis, { cid, data, lastSeenAt = 0 }) => dbApis.transaction('rw', dbApis.albumsCollection, async () => {
  await dbApis.albumsCollection.add({ cid, data, lastSeenAt });
  printRenderer.log(`Done saving ${cid} album to collection.`);
  const albumsCount = await dbApis.albumsCollection.count();
  return { albumsCount };
});

export const saveOrUpdateAlbum = (dbApis, { cid, data, lastSeenAt }) => dbApis.transaction('rw', dbApis.albumsCollection, async () => {
  await dbApis.albumsCollection.put({ cid, data, lastSeenAt });
  printRenderer.log(`Done putting ${cid} album to collection.`);
  const albumsCount = await dbApis.albumsCollection.count();
  return { albumsCount };
});

export const saveOrUpdateAlbums = (dbApis, albums) => dbApis.transaction('rw', dbApis.albumsCollection, async () => {
  try {
    await dbApis.albumsCollection.bulkPut(albums);
    printRenderer.log(`Done putting ${albums.length} albums to collection.`);
  } catch (e) {
    if (e instanceof Dexie.BulkError) {
      printRenderer.error(`Some albums did not succeed. However, ${
        albums.length - e.failures.length
      } albums was added successfully.`);
    } else {
      throw e;
    }
  }
  const [albumsCount, latestAlbum] = await Dexie.Promise.all(
    [
      dbApis.albumsCollection.count(),
      dbApis.albumsCollection.orderBy('createdAt').reverse().first(),
    ],
  );
  return { albumsCount, latestCid: latestAlbum.cid };
});

export const getAlbumsCollectionInfo = async (dbApis) => {
  const albumsCount = await dbApis.albumsCollection.count();
  return { albumsCount };
};
