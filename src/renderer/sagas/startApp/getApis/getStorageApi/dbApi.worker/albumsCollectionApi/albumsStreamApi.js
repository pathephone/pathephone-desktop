import Dexie from 'dexie';
import ipc from '~data/ipc';

// UTILS

function findAlbumsByText(dbApis, { text, limit }) {
  const { albumsCollection } = dbApis;
  function* handleTransaction() {
    const prefixes = text.split(' ');
    // Parallell search for all prefixes - just select resulting primary keys
    const results = yield Dexie.Promise.all(prefixes.map(prefix => albumsCollection
      .where('searchWords')
      .startsWithIgnoreCase(prefix)
      .primaryKeys()));
    // Intersect result set of primary keys
    const reduced = results
      .reduce((a, b) => {
        const set = new Set(b);
        return a.filter(k => set.has(k));
      });

    // Finally select entire documents from intersection
    return yield albumsCollection
      .where(':id')
      .anyOf(reduced)
      .limit(limit)
      .sortBy('createdAt');
  }
  return dbApis.transaction('r', albumsCollection, handleTransaction);
}

function findLatestAlbums(dbApis, { limit }) {
  return dbApis.albumsCollection
    .orderBy('createdAt')
    .reverse()
    .limit(limit)
    .toArray();
}

let closeStream = null;

export const openAlbumsStream = (dbApis, params) => {
  if (closeStream) {
    closeStream();
  }
  const { albumsCollection } = dbApis;
  const makeQuery = async () => {
    try {
      let collection;
      if (params.text) {
        collection = findAlbumsByText(dbApis, params);
      } else {
        collection = findLatestAlbums(dbApis, params);
      }
      const albums = await collection;
      postMessage({
        payload: albums,
        type: ipc.ALBUMS_STREAMED,
      });
    } catch (e) {
      postMessage({
        errorMessage: e.message,
        type: ipc.ALBUMS_STREAMED,
      });
    }
  };
  makeQuery();
  const handleUpdate = (...args) => {
    args[2].on('complete', makeQuery);
  };
  albumsCollection.hook('deleting', handleUpdate);
  closeStream = () => {
    albumsCollection.hook('deleting').unsubscribe(handleUpdate);
  };
};

export const closeAlbumsStream = () => {
  closeStream();
  closeStream = null;
};
