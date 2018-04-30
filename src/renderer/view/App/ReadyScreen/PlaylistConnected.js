import { connect } from 'react-redux'

import Playlist from './Playlist.jsx'

import {
  getPlaylistTracks
} from '#selectors'

import {
  clearPlaylist
} from '#actions'

const mapStateToProps = (state) => ({
  tracks: getPlaylistTracks(state)
})

const mapDispatchToProps = {
  onClearPlaylist: clearPlaylist
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlist)
