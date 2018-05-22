import { connect } from 'react-redux'

import Tracklist from './Tracklist.jsx'

import {
  getPlaylistLastTrackIndex
} from '#selectors'

const mapStateToProps = (state) => {
  return {
    lastTrackIndex: getPlaylistLastTrackIndex(state)
  }
}

export default connect(mapStateToProps)(Tracklist)
