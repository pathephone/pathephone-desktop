import React from 'react'
import propTypes from 'prop-types'

import './ActivePlayer/CustomRangeInput.css'

import ProgressBar from './ActivePlayer/ProgressBar.jsx'
import ControlsLeftConnected from './ActivePlayer/ControlsLeftConnected'
import VolumeInputConnected from './ActivePlayer/VolumeInputConnected'
import ControlsRightConnected from './ActivePlayer/ControlsRightConnected'
import getBufferedAudioMap from '~utils/getBufferedAudioMap'
import TrackTimeline from './ActivePlayer/TrackTimeline.jsx'

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
    this.setState(() => getInitialState())
    this.props.onAudioEnded()
  }
  handleTimeUpdate = () => {
    const { currentTime } = this.audio
    this.setState(state => ({ ...state, currentTime }))
  }
  handlePlay = () => {
    this.props.onAudioPlayed()
  }
  handlePause = () => {
    this.props.onAudioPaused()
  }
  handleLoadStart = () => {
    this.setState(() => getInitialState())
  }
  handleProps = ({ source, volume, isPaused }) => {
    if (this.audio.src !== source) {
      this.audio.src = source
    }
    if (isPaused && !this.audio.paused) {
      this.audio.pause()
    } else
    if (!isPaused && this.audio.paused) {
      this.audio.play()
    }
    this.audio.volume = volume
  }

  componentWillMount () {
    this.audio.addEventListener('loadedmetadata', this.handleLoadedMetadata)
    this.audio.addEventListener('canplaythrough', this.handleCanPlayThrough)
    this.audio.addEventListener('progress', this.handleProgress)
    this.audio.addEventListener('onended', this.handleEnded)
    this.audio.addEventListener('timeupdate', this.handleTimeUpdate)
    this.audio.addEventListener('onplay', this.handlePlay)
    this.audio.addEventListener('pause', this.handlePause)
    this.audio.addEventListener('loadstart', this.handleLoadStart)

    this.handleProps(this.props)
  }
  componentWillReceiveProps (nextProps) {
    this.handleProps(nextProps)
  }
  componentWillUnmount () {
    this.audio.removeEventListener('loadedmetadata', this.handleLoadedMetadata)
    this.audio.removeEventListener('canplaythrough', this.handleCanPlayThrough)
    this.audio.removeEventListener('progress', this.handleProgress)
    this.audio.removeEventListener('onended', this.handleEnded)
    this.audio.removeEventListener('timeupdate', this.handleTimeUpdate)
    this.audio.removeEventListener('onplay', this.handlePlay)
    this.audio.removeEventListener('pause', this.handlePause)
    this.audio.removeEventListener('loadstart', this.handleLoadStart)
    this.audio.pause()
    this.audio.src = ''
  }

  handlePlayClicked = () => {
    this.audio.play()
  }

  handlePauseClicked = () => {
    this.audio.pause()
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
        <ControlsLeftConnected onPlayClicked={this.handlePlayClicked} onPauseClicked={this.handlePauseClicked} />
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
    )
  }
}

ActivePlayer.propTypes = {
  onAudioEnded: propTypes.func.isRequired,
  onAudioPaused: propTypes.func.isRequired,
  onAudioPlayed: propTypes.func.isRequired

}

export default ActivePlayer
