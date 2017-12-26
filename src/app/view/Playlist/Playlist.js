import React from 'react'
import bind from '../../utils/recallReact'
import playlistState from '../../state/playlist'
import playerState from '../../state/player'
import PlaylistView from './PlaylistView'

const onClearPlaylist = () => {
  playlistState('CLEAR')
}

export default bind(
  {
    playlist: playlistState,
    player: playerState
  },
  props => <PlaylistView {... { ...props, onClearPlaylist }} />
)
