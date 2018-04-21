import React from 'react'
import propTypes from 'prop-types'

import './ActivePlayer/CustomRangeInput.css'

import ControlsLeft from './ActivePlayer/ControlsLeft.jsx'
import ControlsRight from './ActivePlayer/ControlsRight.jsx'
import TrackTimeline from './ActivePlayer/TrackTimeline.jsx'
import VolumeInput from './ActivePlayer/VolumeInput.jsx'
import ProgressBar from './ActivePlayer/ProgressBar.jsx'

class ActivePlayer extends React.Component {
  render () {
    const {
      isReadyToPlay
    } = this.props
    return (
      <div className='player'>
        <ControlsLeft />
        {
          isReadyToPlay ? (
            <TrackTimeline />
          ) : (
            <ProgressBar />
          )
        }
        <VolumeInput />
        <ControlsRight />
      </div>
    )
  }
}

ActivePlayer.propTypes = {
  isReadyToPlay: propTypes.bool.isRequired
}

export default ActivePlayer
