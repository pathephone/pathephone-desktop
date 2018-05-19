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
  currentPosition: getAudioTiming(state),
  hasBufferedBar: !getAudioBufferedMap(state),
  duration: getAudioDuration(state),
  timing: getAudioTiming(state)
})

const mapDispatchToProps = {
  onStartSeeking: uiSeekStarted,
  onStopSeeking: uiSeekStoped
}

export default connect(mapStateToProps, mapDispatchToProps)(TrackTimeline)
