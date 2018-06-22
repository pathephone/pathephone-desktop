import { eventChannel } from 'redux-saga'

const getAlbumsCollection = async dbApis => {
  const { albumsCollection } = dbApis
  const findAlbumInCollectionByCid = async cid => {
    return albumsCollection
      .get(cid)
      .toArray()
  }
  const findAlbumsInCollectionByCids = cids => {
    return albumsCollection
      .where('cid')
      .anyOf(cids)
      .toArray()
  }

  const deleteAlbumsFromCollection = cids => {
    return albumsCollection
      .where('cid')
      .anyOf(cids)
      .delete()
  }
  const findOutdatedAlbumsInCollection = period => {
    return albumsCollection
      .where('lastSeenAt')
      .below(period)
      .toArray()
  }
  const saveAlbumIfNotExists = ({ cid, data, lastSeenAt = 0 }) => {
    return albumsCollection.add({ cid, data, lastSeenAt })
  }
  const saveOrUpdateAlbum = ({ cid, data, lastSeenAt }) => {
    return albumsCollection
      .put({ cid, data, lastSeenAt })
  }
  const findAlbumsInCollection = ({ limit, text }) => {
    return eventChannel(emitt => {
      const makeQuery = () => {
        let collection
        if (text) {
          collection = albumsCollection
            .where('searchWords')
            .startsWithIgnoreCase(text)
            .distinct()
            .sortBy('createdAt')
        } else {
          collection = albumsCollection
            .orderBy('createdAt')
            .reverse()
            .limit(limit)
            .toArray()
        }
        collection
          .then(albums => {
            emitt({ albums })
          })
          .catch(error => {
            emitt({ error })
          })
      }
      makeQuery()
      const listener = (...args) => {
        args[2].on('complete', makeQuery)
      }
      albumsCollection.hook('creating', listener)
      albumsCollection.hook('deleting', listener)
      return () => {
        albumsCollection.unsubscribe('creating', listener)
        albumsCollection.unsubscribe('deleting', listener)
      }
    })
  }
  return {
    saveAlbumIfNotExists,
    saveOrUpdateAlbum,
    findAlbumInCollectionByCid,
    findAlbumsInCollectionByCids,
    findOutdatedAlbumsInCollection,
    findAlbumsInCollection,
    deleteAlbumsFromCollection
  }
}

export default getAlbumsCollection
