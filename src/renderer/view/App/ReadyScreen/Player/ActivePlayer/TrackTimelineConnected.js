import { connect } from 'react-redux'

import {
  getTimelineCurrentPostion,
  getBufferedMap
} from '#selectors'

import {
  startSeeking,
  stopSeeking
} from '#actions'

import TrackTimeline from './TrackTimeline.jsx'

const mapStateToProps = (state) => ({
  currentPosition: getTimelineCurrentPostion(state),
  bufferedMap: getBufferedMap(state)
})

const mapDispatchToProps = {
  onStartSeeking: startSeeking,
  onStopSeeking: stopSeeking
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackTimeline)
