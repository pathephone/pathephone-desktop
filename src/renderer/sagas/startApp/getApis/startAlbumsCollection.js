import { eventChannel } from 'redux-saga'

import createAlbumsQuery from '~utils/createAlbumsQuery'
import { albumSchema } from '~data/schemas'

const getAlbumsCollection = async dbApis => {
  const albumsCollection = await dbApis
    .createCollection({
      schema: albumSchema.collectionSchema,
      name: 'albums'
    })
  const findAlbumInCollectionByCid = async cid => {
    const album = await albumsCollection.findOne(cid).exec()
    if (album) {
      return {
        update (data) {
          for (const [key, value] of Object.entries(data)) {
            album[key] = value
          }
          return album.save()
        }
      }
    }
  }
  const findAlbumsInCollectionByCids = cids => {
    const query = {
      cid: {
        $in: cids
      }
    }
    return albumsCollection
      .find(query)
      .exec()
  }

  const deleteAlbumsFromCollection = (cids) => {
    const handleDoc = doc => doc.remove()
    const handleDocs = docs => {
      return Promise.all(docs.map(handleDoc))
    }
    findAlbumsInCollectionByCids(cids)
      .then(handleDocs)
  }
  const findOutdatedAlbumsInCollection = (period) => {
    return albumsCollection.find({ lastSeen: { $lt: period } }).exec()
  }
  const saveAlbumToCollection = ({ cid, data, lastSeen = 0 }) => {
    return albumsCollection.insert({ cid, data, lastSeen })
  }
  const findAlbumsInCollectionByText = ({ limit, text }) => {
    return eventChannel(emitter => {
      const subscription = albumsCollection
        .find(createAlbumsQuery(text))
        .limit(limit)
        .$
        .subscribe(emitter)
      return () => subscription.unsubscribe()
    })
  }
  return {
    albumsCollection,
    saveAlbumToCollection,
    findAlbumInCollectionByCid,
    findAlbumsInCollectionByCids,
    findOutdatedAlbumsInCollection,
    findAlbumsInCollectionByText,
    deleteAlbumsFromCollection
  }
}

export default getAlbumsCollection
