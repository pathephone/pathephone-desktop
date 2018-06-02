import React from 'react'
import propTypes from 'prop-types'

import './ActivePlayer/CustomRangeInput.css'

import ProgressBar from './ActivePlayer/ProgressBar.jsx'
import ControlsLeftConnected from './ActivePlayer/ControlsLeftConnected'
import VolumeInputConnected from './ActivePlayer/VolumeInputConnected'
import ControlsRightConnected from './ActivePlayer/ControlsRightConnected'
import getBufferedAudioMap from '~utils/getBufferedAudioMap'
import TrackTimeline from './ActivePlayer/TrackTimeline.jsx'
import TrackInfoConnected from './ActivePlayer/TrackInfoConnected'

const getInitialState = () => ({
  duration: null,
  currentTime: 0,
  bufferedMap: null,
  isReadyToPlay: false
})

class ActivePlayer extends React.Component {
  audio = new Audio()
  state = getInitialState()

  handleCanPlayThrough = () => {
    this.setState(state => ({ ...state, isReadyToPlay: true }))
  }
  handleLoadedMetadata = () => {
    const { duration } = this.audio
    this.setState(state => ({ ...state, duration }))
  }
  handleProgress = () => {
    const bufferedMap = getBufferedAudioMap(this.audio)
    if (bufferedMap) {
      this.setState(state => ({ ...state, bufferedMap }))
    }
  }
  handleEnded = () => {
    this.props.onAudioEnded()
  }
  handleTimeUpdate = () => {
    const { currentTime } = this.audio
    this.setState(state => ({ ...state, currentTime }))
  }
  handleProps = (props) => {
    const { source = '', volume, isPaused } = props
    if (this.audio.volume !== volume) {
      this.audio.volume = volume
    }
    if (this.audio.src !== source) {
      this.audio.src = source
    }
    if (!isPaused) {
      this.audio.play()
    } else {
      this.audio.pause()
    }
  }

  componentWillMount () {
    this.audio.addEventListener('loadedmetadata', this.handleLoadedMetadata)
    this.audio.addEventListener('canplaythrough', this.handleCanPlayThrough)
    this.audio.addEventListener('progress', this.handleProgress)
    this.audio.addEventListener('ended', this.handleEnded)
    this.audio.addEventListener('timeupdate', this.handleTimeUpdate)
    this.handleProps(this.props)
  }
  componentWillReceiveProps (nextProps) {
    if (this.audio.src !== nextProps.source) {
      this.setState(getInitialState())
    }
    this.handleProps(nextProps)
  }
  componentWillUnmount () {
    this.audio.removeEventListener('loadedmetadata', this.handleLoadedMetadata)
    this.audio.removeEventListener('canplaythrough', this.handleCanPlayThrough)
    this.audio.removeEventListener('progress', this.handleProgress)
    this.audio.removeEventListener('ended', this.handleEnded)
    this.audio.removeEventListener('timeupdate', this.handleTimeUpdate)
    this.audio.src = ''
  }

  handleStopSeeking = time => {
    this.audio.currentTime = time
  }

  render () {
    const {
      isReadyToPlay,
      currentTime,
      duration,
      bufferedMap
    } = this.state
    return (
      <div className='player'>
        <div className='player__top'>
          <TrackInfoConnected />
        </div>
        <div className='player__bottom'>
          <ControlsLeftConnected />
          {
            isReadyToPlay ? (
              <TrackTimeline
                currentTime={currentTime}
                duration={duration}
                bufferedMap={bufferedMap}
                onStopSeeking={this.handleStopSeeking}
              />
            ) : (
              <ProgressBar />
            )
          }
          <VolumeInputConnected />
          <ControlsRightConnected />
        </div>
      </div>
    )
  }
}

ActivePlayer.propTypes = {
  onAudioEnded: propTypes.func.isRequired,
  volume: propTypes.number.isRequired,
  isPaused: propTypes.bool.isRequired,
  source: propTypes.string
}

export default ActivePlayer
