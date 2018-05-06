import { connect } from 'react-redux'

import {
  isPaused,
  isReadyToPlay,
  isRepeatTurnedOn,
  isShuffleTurnedOn,

  getVolume,
  getPlayedTrackSource,
  getPlayedTrackTiming,
  getPlayedTrackBufferedMap,
  getPlayedTrackDuration
} from '#selectors'

import ActivePlayer from './ActivePlayer.jsx'
import { uiPauseToggled, uiRepeatToggled, uiShuffleToggled, uiVolumeChanged, uiSeekStarted } from '#actions-ui'

const mapStateToProps = (...args) => ({
  volume: getVolume(...args),
  currentTiming: getPlayedTrackTiming(...args),
  buffered: getPlayedTrackBufferedMap(...args),
  duration: getPlayedTrackDuration(...args),
  audioSource: getPlayedTrackSource(...args),

  isPaused: isPaused(...args),
  isReadyToPlay: isReadyToPlay(...args),
  isShuffleTurnedOn: isShuffleTurnedOn(...args),
  isRepeatTurnedOn: isRepeatTurnedOn(...args)
})

const mapDispatchToProps = {
  onTogglePause: uiPauseToggled,
  onToggleRepeat: uiRepeatToggled,
  onToggleShuffle: uiShuffleToggled,
  onChangeVolume: uiVolumeChanged,
  onSeekStart: uiSeekStarted
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivePlayer)
