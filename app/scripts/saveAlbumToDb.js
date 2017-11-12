import albums from '../data/albums'

const saveAlbumToDb = async (albumObj) => {
  albums.collection.insert(albumObj)
}

export default saveAlbumToDb
