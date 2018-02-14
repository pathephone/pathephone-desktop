import albums from '../data/albums'

const saveAlbumToDb = (albumObj) => {
  return albums.collection.insert(albumObj)
}

export default saveAlbumToDb
