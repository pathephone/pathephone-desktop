import albums from '../data/albums'

const deleteAlbumsFromDb = (cids) => {
  const query = albums
    .collection
    .find({
      cid: {
        $in: cids
      }
    })
  return query.remove()
}

export default deleteAlbumsFromDb
