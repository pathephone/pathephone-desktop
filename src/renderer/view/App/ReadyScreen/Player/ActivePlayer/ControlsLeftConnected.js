import { connect } from 'react-redux'

import {
  getNextTrackIndex, getPreviousTrackIndex, isPaused
} from '#selectors'

import ControlsLeft from './ControlsLeft.jsx'
import { uiPlaylistTrackPlayed } from '#actions-ui'

const mapStateToProps = (state) => ({
  isPaused: isPaused(state),
  nextTrackId: getNextTrackIndex(state),
  previousTrackId: getPreviousTrackIndex(state)
})

const mapDispatchToProps = {
  onPlayTrack: uiPlaylistTrackPlayed
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { nextTrackId, previousTrackId, isPaused } = stateProps
  const { onPlayTrack } = dispatchProps
  const { onPlayClicked, onPauseClicked } = ownProps
  return {
    onPlaybackToggle () {
      if (isPaused) {
        onPlayClicked()
      } else {
        onPauseClicked()
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
