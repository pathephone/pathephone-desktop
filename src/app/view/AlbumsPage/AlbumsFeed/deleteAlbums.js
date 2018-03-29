import deleteAlbumsFromDb from '~app/scripts/deleteAlbumsFromDb'

const deleteAlbums = (albums) => {
  return deleteAlbumsFromDb(albums)
}

export default deleteAlbums
