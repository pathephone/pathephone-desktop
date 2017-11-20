import albums from '../data/albums'

const removeAlbumFromDb = async (cid) => {
  const doc = await albums
    .collection
    .findOne({
      cid: {
        $eq: cid
      }
    })
    .exec()
  doc.remove()
}

export default removeAlbumFromDb
