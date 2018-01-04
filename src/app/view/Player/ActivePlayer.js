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
  updateSource = (source) => {
    this.audio.src = source
  }
  handleProps = ({ track, playerStateValue }, initial) => {
    const { pause, volume } = playerStateValue
    const { hash } = track
    if (initial || hash !== this.props.track.hash) {
      multihashToUrl(hash)
        .then(this.updateSource)
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
      track, playerStateValue
    } = this.props
    const { title, artist } = track
    const {
      pause, shuffle, repeat, volume, currentTime
    } = playerStateValue
    const { readyToPlay } = this.state
    return (
      <div className='player izi-fill-width izi-padding izi-y'>
        <div className='player__upper-block izi-x'>
          <div className='player__info izi-y izi-padding-x'>
            <h4 className='album_title'>{title}</h4>
            <h5 className='album_artist'>{artist}</h5>
          </div>
        </div>
        <div className='player__lower-block izi-x izi--gap izi-fill-width'>
          <div className='izi-x izi-no-shrink'>
            <button onClick={onPrevTrack}>
              <MdSkipPrev />
            </button>
            <button onClick={onTogglePause}>
              {
                pause
                  ? <MdPlay />
                  : <MdPause />
              }
            </button>
            <button onClick={onNextTrack}>
              <MdSkipNext />
            </button>
          </div>
          {
            readyToPlay && (
              <TrackTimeline
                position={this.prepareTime || currentTime}
                length={this.audio.duration}
                onChange={this.onSetCurrentTime}
              />
            )
          }
          <VolumeInput value={volume} onChange={onChangeVolume} />
          <div className='izi-x izi-no-shrink'>
            <button onClick={onToggleShuffle}>
              <MdShuffle style={shuffle ? {fill: 'chocolate'} : undefined} />
            </button>
            <button onClick={onToggleRepeat}>
              <MdRepeat style={repeat ? {fill: 'chocolate'} : undefined} />
            </button>
          </div>
        </div>
        <style jsx>{`
button {
  flex-shrink: 0;
}
        `}</style>
      </div>
    )
  }
}

export default ActivePlayer
