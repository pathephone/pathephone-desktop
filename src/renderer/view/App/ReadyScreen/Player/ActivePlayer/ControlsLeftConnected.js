import { connect } from 'react-redux'

import {
  isPaused
} from '#selectors'

import ControlsLeft from './ControlsLeft.jsx'
import { uiPlaybackResumed, uiPlaybackPaused, uiNextTrackPlayed, uiPreviousTrackPlayed } from '#actions-ui'

const mapStateToProps = (state) => ({
  isPaused: isPaused(state)
})

const mapDispatchToProps = {
  onPlayNextClick: uiNextTrackPlayed,
  onPlayPreviousClick: uiPreviousTrackPlayed,
  onPlayClick: uiPlaybackResumed,
  onPauseClick: uiPlaybackPaused
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { isPaused } = stateProps
  const { onPlayClick, onPauseClick, ...restDispatchProps } = dispatchProps
  return {
    onPlaybackToggle () {
      if (isPaused) {
        onPlayClick()
      } else {
        onPauseClick()
      }
    },
    ...restDispatchProps,
    hasPauseIcon: !isPaused
  }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ControlsLeft)
