import { connect } from 'react-redux'

import Tracklist from './Tracklist.jsx'

import {
  getPlaylistTracks
} from '#selectors'

const mapStateToProps = (state) => {
  return {
    tracks: getPlaylistTracks(state)
  }
}

export default connect(mapStateToProps)(Tracklist)
