import { connect } from 'react-redux'

import {
  isPaused,
  getPlayedTrackSource
} from '#selectors'

import {
  setReadyToPlay,
  setNotReadyToPlay,
  updateBuffered,
  updateTiming
} from '#actions'

import Audio from './Audio.jsx'

const mapStateToProps = (...args) => {
  return {
    isPaused: isPaused(...args),
    audioSource: getPlayedTrackSource(...args)
  }
}

const mapDispatchToProps = {
  onReadyToPlay: setReadyToPlay,
  onNotReadyToPlay: setNotReadyToPlay,
  onBufferedUpdate: updateBuffered,
  onTimingUpdate: updateTiming
}

export default connect(mapStateToProps, mapDispatchToProps)(Audio)
