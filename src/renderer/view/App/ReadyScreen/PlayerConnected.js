/*
import { connect } from 'react-redux'

import Player from './Player'

import {
  isPlaying,
  getPlayedArtistName,
  getPlayedTrackTitle,
  getPlayedTrackCid,
  getPlayedPercent,
  isShuffleTurnedOn,
  isRepeatTurnedOn
} from '~/selectors'

import {
  togglePlayPause,
  toggleRepeat,
  toggleShuffle,
  playNextTrack,
  playPreviousTrack,
  setPlaybackPosition
} from '~/actions/player'

const mapStateToProps = (...args) => {
  return {
    isPlaying: isPlaying(...args),
    trackCid: getPlayedTrackCid(...args),
    trackTitle: getPlayedTrackTitle(...args),
    artistName: getPlayedArtistName(...args),
    playedPercent: getPlayedPercent(...args),
    isShuffle: isShuffleTurnedOn(...args),
    isRepeat: isRepeatTurnedOn(...args)
  }
}

const mapDispatchToProps = {
  onTogglePlayPause: togglePlayPause,
  onToggleShuffle: toggleShuffle,
  onToggleRepeat: toggleRepeat,
  onPlayNextTrack: playNextTrack,
  onPlayPreviousTrack: playPreviousTrack,
  onSeekEnd: setPlaybackPosition
}
*/

import { connect } from 'react-redux'

import Player from './Player'

import {
  isTracklistEmpty
} from '~/selectors'

const mapStateToProps = (...args) => {
  return {
    isActive: isTracklistEmpty(...args)
  }
}

export default connect(mapStateToProps)(Player)
