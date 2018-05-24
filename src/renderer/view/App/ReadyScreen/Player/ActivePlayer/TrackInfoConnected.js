import { connect } from 'react-redux'

import { getCurrentTrack } from '#selectors'
import TrackInfo from './TrackInfo.jsx'

const mapStateToProps = state => {
  const { title, artist } = getCurrentTrack(state)
  return {
    title, artist
  }
}

export default connect(mapStateToProps)(TrackInfo)
