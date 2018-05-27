import React from 'react'
import propTypes from 'prop-types'

import MdClear from 'react-icons/lib/md/clear'
import MdDown from 'react-icons/lib/md/keyboard-arrow-down'
import MdUp from 'react-icons/lib/md/keyboard-arrow-up'

const TrackControls = (props) => {
  const {
    onRemoveClick, onMoveUpClick, onMoveDownClick,
    isMoveUpDisabled, isMoveDownDisabled
  } = props
  return (
    <div className='izi-y izi-center izi-margin-left'>
      <button
        type='button'
        className='track-form__control-button'
        disabled={isMoveUpDisabled}
        onClick={onMoveUpClick}
      >
        <MdUp />
      </button>
      <button
        type='button'
        onClick={onRemoveClick}
        className='track-form__control-button'
      >
        <MdClear />
      </button>
      <button
        type='button'
        className='track-form__control-button'
        disabled={isMoveDownDisabled}
        onClick={onMoveDownClick}
      >
        <MdDown />
      </button>
    </div>
  )
}

TrackControls.propTypes = {
  onRemoveClick: propTypes.func.isRequired,
  onMoveUpClick: propTypes.func.isRequired,
  onMoveDownClick: propTypes.func.isRequired,
  isMoveDownDisabled: propTypes.bool,
  isMoveUpDisabled: propTypes.bool
}

export default TrackControls
