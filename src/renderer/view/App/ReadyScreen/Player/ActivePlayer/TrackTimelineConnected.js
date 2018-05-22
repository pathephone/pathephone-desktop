import { connect } from 'react-redux'

import {
  getAudioTiming,
  getAudioBufferedMap,
  getAudioDuration
} from '#selectors'

import {
  uiSeekStarted,
  uiSeekStoped
} from '#actions-ui'

import TrackTimeline from './TrackTimeline.jsx'

const mapStateToProps = state => ({
  currentTime: getAudioTiming(state),
  hasBufferedBar: !getAudioBufferedMap(state),
  duration: getAudioDuration(state)
})

const mapDispatchToProps = {
  onStartSeeking: uiSeekStarted,
  onStopSeeking: uiSeekStoped
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackTimeline)
