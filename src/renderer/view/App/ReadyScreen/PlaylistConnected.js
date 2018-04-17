import { connect } from 'react-redux'

import Playlist from './Playlist'

import {
  getPlaylistTracks
} from '~/selectors'

import {
  clearPlaylist
} from '~/actions'

const mapStateToProps = (state) => ({
  tracks: getPlaylistTracks(state)
})

const mapDispatchToProps = {
  clearPlaylist
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlist)
