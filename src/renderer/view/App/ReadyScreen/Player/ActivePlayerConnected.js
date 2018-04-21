import { connect } from 'react-redux'

import {
  isPaused,
  isReadyToPlayAudio,
  isShuffleTournedOn,
  isRepeatTurnedOn,

  getPlayedAudioSource,
  getVolume,
  getCurrentTiming,
  getCurrentTrackBufferedMap,
  getCurrentTrackDuration
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
  currentTiming: getCurrentTiming(...args),
  buffered: getCurrentTrackBufferedMap(...args),
  duration: getCurrentTrackDuration(...args),

  isPaused: isPaused(...args),
  isReadyToPlay: isReadyToPlayAudio(...args),

  isShuffleTurnedOn: isShuffleTournedOn(...args),
  isRepeatTurnedOn: isRepeatTurnedOn(...args),
  audioSource: getPlayedAudioSource(...args)
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
