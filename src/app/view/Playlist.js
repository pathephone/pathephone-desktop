import bind from '~app/utils/recallReact'
import playlistState from '~app/state/playlist'
import playerState from '~app/state/player'
import PlaylistView from './Playlist/PlaylistView'

export default bind(
  {
    playlist: playlistState,
    player: playerState
  },
  PlaylistView
)
