import React from 'react'
import MdSkipNext from 'react-icons/lib/md/skip-next'
import MdSkipPrev from 'react-icons/lib/md/skip-previous'
import MdPause from 'react-icons/lib/md/pause'
import MdPlay from 'react-icons/lib/md/play-arrow'
import MdRepeat from 'react-icons/lib/md/repeat'
import MdShuffle from 'react-icons/lib/md/shuffle'

import onPlayNextTrack from '~/scripts/playNextTrack'
import onPlayPrevTrack from '~/scripts/playPrevTrack'
import onTogglePause from '~/scripts/togglePause'
import onToggleShuffle from '~/scripts/toggleShuffle'
import onToggleRepeat from '~/scripts/toggleRepeat'
import onChangeVolume from '~/scripts/changeVolume'
import onChangeTimeline from '~/scripts/changeTimeline'

import TrackTimeline from './ActivePlayer/TrackTimeline'
import VolumeInput from './ActivePlayer/VolumeInput'

class ActivePlayer extendsReact.Component {
  audio = new Audio()
  updateAudioSource = (hash) => {
    this.audio.src = `http://localhost:5001/api/v0/get?arg=${hash}`
  }
  componentWillMount () {
    const { hash, pause } = this.props
    this.updateAudioSource(hash)
    if (!pause) {
      this.audio.play()
    }
  }
  componentWillReceiveProps (next) {
    if (next.hash !== this.props.hash) {
      this.updateAudioSource(next.hash)
    }
    if (next.pause) {
      this.audio.pause()
    } else {
      this.audio.play()
    }
  }
  render () {
    const {
      title, artist,
      pause, shuffle, repeat, volume
    } = this.props
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
            <button onClick={onPlayPrevTrack}>
              <MdSkipPrev />
            </button>
            <button onClick={onTogglePause}>
              {
                pause
                  ? <MdPlay />
                  : <MdPause />
              }
            </button>
            <button onClick={onPlayNextTrack}>
              <MdSkipNext />
            </button>
          </div>
          <TrackTimeline
            position={60}
            length={120}
            onChange={onChangeTimeline}
          />
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
/*
          <CustomAudio
            className='izi-fill-width'
            controls
            autoPlay
            src={`http://localhost:5001/api/v0/cat?arg=${hash}`}
            onEnded={onPlayNextTrack}
          />
*/
