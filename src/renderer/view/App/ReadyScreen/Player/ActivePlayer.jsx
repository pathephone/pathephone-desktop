import React from 'react'
import propTypes from 'prop-types'

import './ActivePlayer/CustomRangeInput.css'

import PlaybackControls from './ActivePlayer/PlaybackControls'
import TrackTimeline from './ActivePlayer/TrackTimeline'
import VolumeInput from './ActivePlayer/VolumeInput'
import ProgressBar from './ActivePlayer/ProgressBar'

class ActivePlayer extends React.Component {
  render () {
    const {
      isReadyToPlay
    } = this.props
    return (
      <div className='player'>
        <PlaybackControls />
        {
          isReadyToPlay ? (
            <TrackTimeline />
          ) : (
            <ProgressBar />
          )
        }
        <VolumeInput />
      </div>
    )
  }
}

ActivePlayer.propTypes = {
  isReadyToPlay: propTypes.bool.isRequired
}

export default ActivePlayer
