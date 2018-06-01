import { connect } from 'react-redux'

import Tracklist from './Tracklist.jsx'

import {
  getPlaylistTracksIndexes
} from '#selectors'

const mapStateToProps = (state) => {
  return {
    tracksIndexes: getPlaylistTracksIndexes(state)
  }
}

export default connect(mapStateToProps)(Tracklist)
