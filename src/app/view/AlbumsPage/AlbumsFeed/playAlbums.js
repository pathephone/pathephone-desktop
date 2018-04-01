import playlistState from '~app/state/playlist'
import playerState from '~app/state/player'
import getAlbumsTracks from './getAlbumsTracks'
import downloadPlaylist from '~app/scripts/downloadPlaylist'

const playAlbums = async (cids) => {
  const tracks = await getAlbumsTracks(cids)
  playlistState('CLEAR')
  playlistState('ADD_TRACKS', ...tracks)
  playerState('PLAY')
  downloadPlaylist(playlistState())
}

export default playAlbums
