import bind from '~/utils/recallReact'
import playlistState from '~/state/playlist'
import playerState from '~/state/player'
import PlaylistView from './Playlist/PlaylistView'

export default bind(
  {
    playlist: playlistState,
    player: playerState
  },
  PlaylistView
)
