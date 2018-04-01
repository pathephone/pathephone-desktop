import React from 'react'
import MdSkipNext from 'react-icons/lib/md/skip-next'
import MdSkipPrev from 'react-icons/lib/md/skip-previous'
import MdPause from 'react-icons/lib/md/pause'
import MdPlay from 'react-icons/lib/md/play-arrow'
import MdRepeat from 'react-icons/lib/md/repeat'
import MdShuffle from 'react-icons/lib/md/shuffle'

import './ActivePlayer/CustomRangeInput.css'

import onNextTrack from '~app/scripts/setNextCurrentTrack'
import onPrevTrack from '~app/scripts/setPrevCurrentTrack'
import onTogglePause from '~app/scripts/togglePause'
import onToggleShuffle from '~app/scripts/toggleShuffle'
import onToggleRepeat from '~app/scripts/toggleRepeat'
import onChangeVolume from '~app/scripts/changeVolume'
import onChangeCurrentTime from '~app/scripts/changeCurrentTime'

import TrackTimeline from './ActivePlayer/TrackTimeline'
import VolumeInput from './ActivePlayer/VolumeInput'
import ProgressBar from './ActivePlayer/ProgressBar'

class ActivePlayer extends React.Component {
  state = {
    readyToPlay: false,
    buffered: []
  }
  audio = new Audio()
  prepareTime = undefined // мнимое время, когда перематываем
  // CUSTOM
  setReadyToPlay = (value) => {
    this.setState({
      readyToPlay: value
    })
  }
  onSetCurrentTime = ({time, prepare}) => {
    if (!prepare) {
      delete this.prepareTime
      this.audio.currentTime = time
    } else {
      // время во время перемотки
      this.prepareTime = time || 1 // 1 - исправляет случай если пользователь ставит курсор вначале плейлиста и неверно используется время
      onChangeCurrentTime(time)
    }
  }
  updateBuffered = () => {
    const bufferedMap = []
    const { buffered, duration } = this.audio
    if (!duration) return
    const percent = this.audio.duration / 100
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
    this.setState({ buffered: bufferedMap })
  }
  attachListeners = () => {
    this.audio.onloadstart = () => {
      this.setReadyToPlay(false)
    }
    this.audio.oncanplaythrough = () => {
      this.setReadyToPlay(true)
    }
    this.audio.onprogress = this.updateBuffered
    this.audio.onended = onNextTrack
    this.audio.ontimeupdate = () => {
      const { currentTime } = this.audio
      onChangeCurrentTime(currentTime)
    }
  }
  updateSource = (source, updateToken) => {
    // if (this.updateToken === updateToken) {
    this.audio.src = source
    // }
  }
  handleProps = ({ track, playerStateValue }, initial) => {
    const { pause, volume } = playerStateValue
    const { hash } = track
    if (initial || hash !== this.props.track.hash) {
      this.updateSource(`http://localhost:8080/ipfs/${hash}`)
      /*
      multihashToUrl(hash)
      this.updateToken = getRandomString()
      const updateToken = this.updateToken
      this.updateSource('', updateToken)
      multihashToUrl(hash)
        .then((url) => { this.updateSource(url, updateToken) })
      */
    }
    if (pause) {
      this.audio.pause()
    } else {
      this.audio.play()
    }
    this.audio.volume = volume
  }
  // LIFECYCLE
  componentWillMount () {
    this.attachListeners()
    this.handleProps(this.props, true)
  }
  componentWillReceiveProps (next) {
    this.handleProps(next)
  }
  componentWillUnmount () {
    this.audio.src = ''
  }
  render () {
    const {
      playerStateValue
    } = this.props
    const {
      pause, shuffle, repeat, volume, currentTime
    } = playerStateValue
    const { readyToPlay, buffered } = this.state
    return (
      <div className='player'>
        <div className='player__playback-controls'>
          <button className='round-button' onClick={onPrevTrack}>
            <MdSkipPrev />
          </button>
          <button className='round-button' onClick={onTogglePause}>
            {
              pause
                ? <MdPlay />
                : <MdPause />
            }
          </button>
          <button className='round-button' onClick={onNextTrack}>
            <MdSkipNext />
          </button>
        </div>
        {
          readyToPlay ? (
            <TrackTimeline
              buffered={buffered}
              position={this.prepareTime || currentTime}
              length={this.audio.duration}
              onChange={this.onSetCurrentTime}
            />
          ) : (
            <ProgressBar />
          )
        }
        <VolumeInput value={volume} onChange={onChangeVolume} />
        <div className='player__rest-controls'>
          <button
            className={shuffle ? 'player__toggle--active' : 'player__toggle'}
            onClick={onToggleShuffle}
          >
            <MdShuffle />
          </button>
          <button
            className={repeat ? 'player__toggle--active' : 'player__toggle'}
            onClick={onToggleRepeat}
          >
            <MdRepeat />
          </button>
        </div>
      </div>
    )
  }
}

export default ActivePlayer
