import React from 'react'
import propTypes from 'prop-types'

import './ActivePlayer/CustomRangeInput.css'

import ProgressBar from './ActivePlayer/ProgressBar.jsx'
import ControlsLeftConnected from './ActivePlayer/ControlsLeftConnected'
import TrackTimelineConnected from './ActivePlayer/TrackTimelineConnected'
import VolumeInputConnected from './ActivePlayer/VolumeInputConnected'
import ControlsRightConnected from './ActivePlayer/ControlsRightConnected'

class ActivePlayer extends React.Component {
  render () {
    const {
      isAudioReadyToPlay
    } = this.props
    return (
      <div className='player'>
        <ControlsLeftConnected />
        {
          isAudioReadyToPlay ? (
            <TrackTimelineConnected />
          ) : (
            <ProgressBar />
          )
        }
        <VolumeInputConnected />
        <ControlsRightConnected />
      </div>
    )
  }
}

ActivePlayer.propTypes = {
  isAudioReadyToPlay: propTypes.bool.isRequired
}

export default ActivePlayer
