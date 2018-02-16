import albums from '../data/albums'

const saveAlbumToDb = (albumObj) => {
  return albums.collection.upsert(albumObj)
}

export default saveAlbumToDb
