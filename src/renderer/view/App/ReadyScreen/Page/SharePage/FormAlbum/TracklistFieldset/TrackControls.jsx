import React from 'react'
import propTypes from 'prop-types'

import MdClear from 'react-icons/lib/md/clear'
import MdDown from 'react-icons/lib/md/keyboard-arrow-down'
import MdUp from 'react-icons/lib/md/keyboard-arrow-up'

const TrackControls = (props) => {
  const { onDeleteTrack, onMoveTrackUp, onMoveTrackDown } = props
  return (
    <div className='izi-y izi-center izi-margin-left'>
      <button
        className='track-form__control-button'
        disabled={!onMoveTrackUp}
        onClick={onMoveTrackUp}
      >
        <MdUp />
      </button>
      <button
        onClick={onDeleteTrack}
        className='track-form__control-button'
      >
        <MdClear />
      </button>
      <button
        className='track-form__control-button'
        disabled={!onMoveTrackDown}
        onClick={onMoveTrackDown}
      >
        <MdDown />
      </button>
    </div>
  )
}

TrackControls.propTypes = {
  onMoveTrackDown: propTypes.func,
  onDeleteTrack: propTypes.func.isRequired,
  onMoveTrackUp: propTypes.func
}

export default TrackControls
