import playlistState from '~/state/playlist'
import getAlbumsTracks from './getAlbumsTracks'

const addAlbums = async (cids) => {
  const tracks = await getAlbumsTracks(cids)
  playlistState('ADD_TRACKS', ...tracks)
}

export default addAlbums
