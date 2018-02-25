import React from 'react'
import MdSkipNext from 'react-icons/lib/md/skip-next'
import MdSkipPrev from 'react-icons/lib/md/skip-previous'
import MdPause from 'react-icons/lib/md/pause'
import MdPlay from 'react-icons/lib/md/play-arrow'
import MdRepeat from 'react-icons/lib/md/repeat'
import MdShuffle from 'react-icons/lib/md/shuffle'

import onNextTrack from '~/scripts/setNextCurrentTrack'
import onPrevTrack from '~/scripts/setPrevCurrentTrack'
import onTogglePause from '~/scripts/togglePause'
import onToggleShuffle from '~/scripts/toggleShuffle'
import onToggleRepeat from '~/scripts/toggleRepeat'
import onChangeVolume from '~/scripts/changeVolume'
import onChangeCurrentTime from '~/scripts/changeCurrentTime'
import multihashToUrl from '~/scripts/multihashToUrl'

import TrackTimeline from './ActivePlayer/TrackTimeline'
import VolumeInput from './ActivePlayer/VolumeInput'
import ProgressBar from './ActivePlayer/ProgressBar'
import getRandomString from '../../utils/getRandomString'

class ActivePlayer extends React.Component {
  state = {
    readyToPlay: false
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
  attachListeners = () => {
    this.audio.onloadstart = () => {
      this.setReadyToPlay(false)
    }
    this.audio.oncanplaythrough = () => {
      this.setReadyToPlay(true)
    }
    this.audio.onended = onNextTrack
    this.audio.ontimeupdate = () => {
      const { currentTime } = this.audio
      onChangeCurrentTime(currentTime)
    }
  }
  updateSource = (source, updateToken) => {
    if (this.updateToken === updateToken) {
      this.audio.src = source
    }
  }
  handleProps = ({ track, playerStateValue }, initial) => {
    const { pause, volume } = playerStateValue
    const { hash } = track
    if (initial || hash !== this.props.track.hash) {
      // this.updateSource(`http://localhost:5001/api/v0/cat?arg=${hash}`)
      this.updateToken = getRandomString()
      const updateToken = this.updateToken
      this.updateSource('', updateToken)
      multihashToUrl(hash)
        .then((url) => { this.updateSource(url, updateToken) })
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
    const { readyToPlay } = this.state
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
