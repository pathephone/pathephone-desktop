import { connect } from 'react-redux'

import Playlist from './Playlist'

import {
  getPlaylistTracks
} from '~/selectors'

import {
  playTrackFromPlaylist,
  removeTrackFromPlaylist,
  clearPlaylist
} from '~/actions'

const mapStateToProps = (...args) => {
  return {
    tracks: getPlaylistTracks(...args)
  }
}

const mapDispatchToProps = {
  playTrackFromPlaylist,
  removeTrackFromPlaylist,
  clearPlaylist
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlist)
