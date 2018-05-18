const handleDoc = doc => doc.remove()

const handleDocs = docs => {
  return Promise.all(docs.map(handleDoc))
}

function deleteAlbumsFromCollection ({ albumsCollection }, cids) {
  const query = {
    cid: {
      $in: cids
    }
  }
  return albumsCollection
    .find(query)
    .exec()
    .then(handleDocs)
}

export default deleteAlbumsFromCollection
