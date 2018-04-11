import React from 'react'
import propTypes from 'prop-types'

import MdSkipNext from 'react-icons/lib/md/skip-next'
import MdSkipPrev from 'react-icons/lib/md/skip-previous'
import MdPause from 'react-icons/lib/md/pause'
import MdPlay from 'react-icons/lib/md/play-arrow'
import MdRepeat from 'react-icons/lib/md/repeat'
import MdShuffle from 'react-icons/lib/md/shuffle'

import './ActivePlayer/CustomRangeInput.css'

import TrackTimeline from './ActivePlayer/TrackTimeline'
import VolumeInput from './ActivePlayer/VolumeInput'
import ProgressBar from './ActivePlayer/ProgressBar'

class ActivePlayer extends React.Component {
  render () {
    const {
      onPlayPreviousTrack,
      onPlayNextTrack,
      onTogglePause,
      onToggleRepeat,
      onToggleShuffle,
      onChangeVolume,
      onSeek,

      buffered,
      duration,
      currentTiming,
      volume,

      isReadyToPlay,
      isPaused,
      isShuffleTurnedOn,
      isRepeatTurnedOn
    } = this.props
    return (
      <div className='player'>
        <div className='player__playback-controls'>
          <button className='round-button' onClick={onPlayPreviousTrack}>
            <MdSkipPrev />
          </button>
          <button className='round-button' onClick={onTogglePause}>
            {
              isPaused
                ? <MdPlay />
                : <MdPause />
            }
          </button>
          <button className='round-button' onClick={onPlayNextTrack}>
            <MdSkipNext />
          </button>
        </div>
        {
          isReadyToPlay ? (
            <TrackTimeline
              buffered={buffered}
              position={currentTiming}
              length={duration}
              onChange={onSeek}
            />
          ) : (
            <ProgressBar />
          )
        }
        <VolumeInput value={volume} onChange={onChangeVolume} />
        <div className='player__rest-controls'>
          <button
            className={isShuffleTurnedOn ? 'player__toggle--active' : 'player__toggle'}
            onClick={onToggleShuffle}
          >
            <MdShuffle />
          </button>
          <button
            className={isRepeatTurnedOn ? 'player__toggle--active' : 'player__toggle'}
            onClick={onToggleRepeat}
          >
            <MdRepeat />
          </button>
        </div>
      </div>
    )
  }
}

ActivePlayer.propTypes = {
  buffered: propTypes.array,
  currentTiming: propTypes.number,
  duration: propTypes.number,
  volume: propTypes.number.isRequired,

  isPaused: propTypes.bool.isRequired,
  isRepeatTurnedOn: propTypes.bool.isRequired,
  isShuffleTurnedOn: propTypes.bool.isRequired,
  isReadyToPlay: propTypes.bool.isRequired,

  onPlayNextTrack: propTypes.func.isRequired,
  onPlayPreviousTrack: propTypes.func.isRequired,
  onSeek: propTypes.func.isRequired,
  onChangeVolume: propTypes.func.isRequired,
  onTogglePause: propTypes.func.isRequired,
  onToggleRepeat: propTypes.func.isRequired,
  onToggleShuffle: propTypes.func.isRequired
}

export default ActivePlayer
