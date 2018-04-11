import React from 'react'
import propTypes from 'prop-types'
import { buffer } from 'rxjs/operator/buffer'

const getBufferedAudioMap = ({ buffered, duration }) => {
  if (!duration) return
  const bufferedMap = []
  const percent = duration / 100
  if (buffered.length > 0) {
    for (let i = 0; i < buffered.length; i++) {
      const start = buffered.start(i) / percent
      const end = buffered.end(i) / percent
      bufferedMap.push([start, end])
    }
  } else {
    const start = buffered.start(0) / percent
    const end = buffered.end(0) / percent
    bufferedMap.push([start, end])
  }
  return bufferedMap
}

class Audio extends React.Component {
  audio = new Audio()

  // CUSTOM METHODS

  updateBuffered = () => {
    const {
      onUpdateBufferedMap
    } = this.props
    const bufferedMap = getBufferedAudioMap(this.audio)
    if (bufferedMap) {
      onUpdateBufferedMap(bufferedMap)
    }
  }
  attachListeners = () => {
    const {
      onNotReadyToPlay,
      onReadyToPlay,
      onUpdateBufferedMap,
      onPlayNextTrack,
      onTimingUpdate
    } = this.props
    this.audio.onloadstart = onNotReadyToPlay
    this.audio.oncanplaythrough = onReadyToPlay
    this.audio.onprogress = onUpdateBufferedMap
    this.audio.onended = onPlayNextTrack
    this.audio.ontimeupdate = () => {
      const { currentTime } = this.audio
      onTimingUpdate(currentTime)
    }
  }
  updateSource = (source, updateToken) => {
    this.audio.src = source
  }
  handleProps = (nextProps, initial) => {
    const {
      isPaused,
      volume,
      audioSource,
      trackId,
      seekTiming,
      onSeekTimingApllied
    } = nextProps
    const newTrack = trackId !== this.props.trackId
    if (initial || newTrack) {
      this.updateSource(audioSource)
    }
    if (isPaused) {
      this.audio.pause()
    } else {
      this.audio.play()
    }
    if (seekTiming) {
      this.audio.currentTime = seekTiming
      onSeekTimingApllied()
    }
    this.audio.volume = volume
  }

  // LIFECYCLE

  componentWillMount () {
    this.attachListeners()
    this.handleProps(this.props, true)
  }
  componentWillReceiveProps (nextProps) {
    this.handleProps(nextProps)
  }
  shouldComponentUpdate () {
    return false
  }
  componentWillUnmount () {
    this.audio.src = ''
  }
  render () {
    return this.props.children
  }
}

Audio.propTypes = {
  isPaused: propTypes.bool.isRequired,
  children: propTypes.object.isRequired,
  volume: propTypes.number.isRequired,
  audioSource: propTypes.string.isRequired,
  trackId: propTypes.string.isRequired,
  seekTiming: propTypes.number.isRequired,

  onReadyToPlay: propTypes.func.isRequired,
  onPlayNextTrack: propTypes.func.isRequired,
  onNotReadyToPlay: propTypes.func.isRequired,
  onUpdateBufferedMap: propTypes.func.isRequired,
  onTimingUpdate: propTypes.func.isRequired,
  onSeekTimingApllied: propTypes.func.isRequired
}

export default Audio
