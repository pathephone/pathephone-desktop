import { connect } from 'react-redux'

import Playlist from './Playlist.jsx'

import {
  isPlaylistEmpty
} from '#selectors'

import { uiPlaylistCleared } from '#actions-ui'

const mapStateToProps = (state) => {
  return {
    hasTracklist: !isPlaylistEmpty(state)
  }
}

const mapDispatchToProps = {
  onClearPlaylist: uiPlaylistCleared
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlist)
