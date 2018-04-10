import { connect } from 'react-redux'

import Player from './Player'

import {
  isPlaying,
  getPlayedArtistName,
  getPlayedTrackTitle,
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
  setCurrentPosition
} from '~/actions/player'

const mapStateToProps = (...args) => {
  return {
    isPlaying: isPlaying(...args),
    trackTitle: getPlayedTrackTitle(...args),
    artistName: getPlayedArtistName(...args),
    playedPercent: getPlayedPercent(...args),
    isShuffle: isShuffleTurnedOn(...args),
    isRepeat: isRepeatTurnedOn(...args)
  }
}

const mapDispatchToProps = {
  togglePlayPause,
  toggleShuffle,
  toggleRepeat,
  playNextTrack,
  playPreviousTrack,
  setCurrentPosition
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)
