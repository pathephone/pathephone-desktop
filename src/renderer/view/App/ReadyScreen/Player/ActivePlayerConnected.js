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

import {
  playPreviousTrack,
  playNextTrack,
  togglePause,
  toggleRepeat,
  toggleShuffle,
  changeVolume,
  seek
} from '#actions'

import ActivePlayer from './ActivePlayer.jsx'

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
  onPlayPreviousTrack: playPreviousTrack,
  onPlayNextTrack: playNextTrack,
  onTogglePause: togglePause,
  onToggleRepeat: toggleRepeat,
  onToggleShuffle: toggleShuffle,
  onChangeVolume: changeVolume,
  onSeek: seek
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivePlayer)
