import { connect } from 'react-redux'

import Playlist from './Playlist.jsx'

import {
  getPlaylistTracks
} from '#selectors'

import { uiPlaylistCleared } from '#actions-ui'

const mapStateToProps = (state) => {
  const tracks = getPlaylistTracks(state)
  return {
    tracks,
    hasTracklist: tracks.length > 0
  }
}

const mapDispatchToProps = {
  onClearPlaylist: uiPlaylistCleared
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlist)
