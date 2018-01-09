import playlistState from '~/state/playlist'
import playerState from '~/state/player'
import getAlbumsTracks from './getAlbumsTracks'

const playAlbums = async (cids) => {
  const tracks = await getAlbumsTracks(cids)
  playlistState('CLEAR')
  playlistState('ADD_TRACKS', ...tracks)
  playerState('PLAY')
}

export default playAlbums
