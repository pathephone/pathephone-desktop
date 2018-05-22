import { connect } from 'react-redux'

import ActivePlayer from './ActivePlayer.jsx'
import { systemAudioEnded, systemAudioPlayed, systemAudioPaused } from '#actions-system'
import { getCurrentTrackSource, getVolume, isPaused } from '#selectors'

const mapStateToProps = (state) => ({
  source: getCurrentTrackSource(state),
  volume: getVolume(state),
  isPaused: isPaused(state)
})

const mapDispatchToProps = {
  onAudioEnded: systemAudioEnded,
  onAudioPlayed: systemAudioPlayed,
  onAudioPaused: systemAudioPaused
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivePlayer)
