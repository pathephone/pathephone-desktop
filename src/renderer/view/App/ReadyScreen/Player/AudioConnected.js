import { connect } from 'react-redux'

import {
  isPause,
  getPlayedAudioSource
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
    isPause: isPause(...args),
    audioSource: getPlayedAudioSource(...args)
  }
}

const mapDispatchToProps = {
  onReadyToPlay: setReadyToPlay,
  onNotReadyToPlay: setNotReadyToPlay,
  onBufferedUpdate: updateBuffered,
  onTimingUpdate: updateTiming
}

export default connect(mapStateToProps, mapDispatchToProps)(Audio)
