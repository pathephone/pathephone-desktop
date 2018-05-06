import { connect } from 'react-redux'

import Playlist from './Playlist.jsx'

import {
  getPlaylistTracks
} from '#selectors'

import { uiPlaylistCleared } from '#actions-ui'

const mapStateToProps = (state) => ({
  tracks: getPlaylistTracks(state)
})

const mapDispatchToProps = {
  onClearPlaylist: uiPlaylistCleared
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlist)
