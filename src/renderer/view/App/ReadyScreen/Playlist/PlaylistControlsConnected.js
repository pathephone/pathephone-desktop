import { connect } from 'react-redux'

import { uiPlaylistCleared } from '~actions/ui'

import PlaylistControls from './PlaylistControls.jsx'

const mapDispatchToProps = {
  onClearPlaylist: uiPlaylistCleared
}

export default connect(null, mapDispatchToProps)(PlaylistControls)
