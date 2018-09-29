import Dexie from 'dexie';
import validateAlbum from '~shared/utils/validateAlbum';
import { ALBUMS_COLLECTION_LIMIT } from '~shared/data/constants';
import printRenderer from '~shared/utils/printRenderer';

const DB_NAME = 'pathephone';

const patchObjectWithDerivedData = (obj) => {
  const { title, artist } = obj.data;
  const searchWords = [...title.split(' '), ...artist.split(' ')];
  searchWords.filter(w => !!w);
  obj.searchWords = searchWords; // eslint-disable-line no-param-reassign
  obj.createdAt = new Date().getTime(); // eslint-disable-line no-param-reassign
};

const cutOutdatedAlbums = async (db) => {
  const count = await db.albumsCollection.count();
  const extraCount = count - ALBUMS_COLLECTION_LIMIT + 1;
  if (extraCount > 0) {
    await db
      .albumsCollection
      .orderBy('createdAt')
      .limit(extraCount)
      .delete();
  }
};

const startDb = async () => {
  const db = new Dexie(DB_NAME);
  db
    .version(1)
    .stores({
      albumsCollection: '&cid, createdAt, lastSeenAt, *searchWords',
    });
  db.albumsCollection.hook('creating', async (primary, obj) => {
    const { valid, errors } = validateAlbum(obj.data);
    if (valid) {
      patchObjectWithDerivedData(obj);
      await cutOutdatedAlbums(db);
    } else {
      printRenderer.log(obj);
      printRenderer.error(errors);
      throw new Error('Album instance is invalid.');
    }
  });
  db.albumsCollection.hook('updating', (mod, prim, obj) => {
    const { createdAt, searchWords } = obj;
    return { ...mod, createdAt, searchWords };
  });
  await db.open();
  return db;
};

export default startDb;
