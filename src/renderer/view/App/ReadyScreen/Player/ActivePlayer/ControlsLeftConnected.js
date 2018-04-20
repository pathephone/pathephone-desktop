import { connect } from 'react-redux'

import {
  isPlaybackPaused
} from '~/selectors'

import {
  playNextPlaylistTrack,
  playPreviousPlaylistTrack,
  pausePlayback,
  resumePlayback
} from '~/actions'

import ControlsLeft from './ControlsLeft.jsx'

const mapStateToProps = (state) => ({
  isPaused: isPlaybackPaused(state)
})

const mapDispatchToProps = {
  onPlayNextClick: playNextPlaylistTrack,
  onPlayPreviousClick: playPreviousPlaylistTrack,
  pausePlayback,
  resumePlayback
}

const mergeProps = (stateProps, dispatchProps) => {
  const { pausePlayback, resumePlayback, ...restDispatchProps } = dispatchProps
  return {
    ...stateProps,
    ...restDispatchProps,
    onPauseResumeClick: stateProps.isPaused ? resumePlayback : pausePlayback
  }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ControlsLeft)
