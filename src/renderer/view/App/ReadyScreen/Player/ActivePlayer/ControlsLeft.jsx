import React from 'react'
import propTypes from 'prop-types'

import MdSkipNext from 'react-icons/lib/md/skip-next'
import MdSkipPrev from 'react-icons/lib/md/skip-previous'
import MdPause from 'react-icons/lib/md/pause'
import MdPlay from 'react-icons/lib/md/play-arrow'

const ControlsLeft = ({ hasPauseIcon, onPlayPreviousClick, onPlayNextClick, onPlaybackToggle }) => (
  <div className='player__playback-controls'>
    <button className='round-button' onClick={onPlayPreviousClick}>
      <MdSkipPrev />
    </button>
    <button className='round-button' onClick={onPlaybackToggle}>
      {
        hasPauseIcon
          ? <MdPause />
          : <MdPlay />
      }
    </button>
    <button className='round-button' onClick={onPlayNextClick}>
      <MdSkipNext />
    </button>
  </div>
)

ControlsLeft.propTypes = {
  hasPauseIcon: propTypes.bool.isRequired,
  onPlayNextClick: propTypes.func.isRequired,
  onPlayPreviousClick: propTypes.func.isRequired,
  onPlaybackToggle: propTypes.func.isRequired
}

export default ControlsLeft
