import deleteAlbumsFromDb from '~/scripts/deleteAlbumsFromDb'

const deleteAlbums = (albums) => {
  return deleteAlbumsFromDb(albums)
}

export default deleteAlbums
