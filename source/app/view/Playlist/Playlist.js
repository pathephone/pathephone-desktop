import React from 'react'
import bind from 'utils/recallReact'
import playlistState from '~/state/playlist'
import playerState from '~/state/player'
import currentTrackState from '~/state/currentTrack'
import PlaylistView from './PlaylistView'

export default bind(
  {
    playlist: playlistState,
    player: playerState,
    currentTrack: currentTrackState
  },
  PlaylistView
)
