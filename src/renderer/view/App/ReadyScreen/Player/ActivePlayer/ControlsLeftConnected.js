import { connect } from 'react-redux'

import {
  getNextTrackId, getPreviousTrackId, isPaused
} from '#selectors'

import ControlsLeft from './ControlsLeft.jsx'
import { uiPlaylistTrackPlayed, uiPlaybackPaused, uiPlaybackResumed } from '#actions-ui'

const mapStateToProps = (state) => ({
  isPaused: isPaused(state),
  nextTrackId: getNextTrackId(state),
  previousTrackId: getPreviousTrackId(state)
})

const mapDispatchToProps = {
  onPlayTrack: uiPlaylistTrackPlayed,
  onPaused: uiPlaybackPaused,
  onResumed: uiPlaybackResumed
}

const mergeProps = (stateProps, dispatchProps) => {
  const { nextTrackId, previousTrackId, isPaused } = stateProps
  const { onPlayTrack, onPaused, onResumed } = dispatchProps
  return {
    onPlaybackToggle () {
      if (isPaused) {
        onResumed()
      } else {
        onPaused()
      }
    },
    onPlayNextClick () {
      onPlayTrack(nextTrackId)
    },
    onPlayPreviousClick () {
      onPlayTrack(previousTrackId)
    },
    isPaused
  }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ControlsLeft)
