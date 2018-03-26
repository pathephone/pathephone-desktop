import playlistState from '~/state/playlist'
import getAlbumsTracks from './getAlbumsTracks'
import downloadPlaylist from '~/scripts/downloadPlaylist'

const addAlbums = async (cids) => {
  const tracks = await getAlbumsTracks(cids)
  playlistState('ADD_TRACKS', ...tracks)
  downloadPlaylist(playlistState())
}

export default addAlbums
