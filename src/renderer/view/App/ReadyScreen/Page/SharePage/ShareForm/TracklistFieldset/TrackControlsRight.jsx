import React from 'react'
import propTypes from 'prop-types'

import MdClear from 'react-icons/lib/md/clear'
import MdDown from 'react-icons/lib/md/keyboard-arrow-down'
import MdUp from 'react-icons/lib/md/keyboard-arrow-up'

const TrackControls = (props) => {
  const {
    onRemoveClick
  } = props
  return (
    <React.Fragment>
      <button
        type='button'
        onClick={onRemoveClick}
        className='trackInputControlButton'
      >
        <MdClear />
      </button>
    </React.Fragment>
  )
}

TrackControls.propTypes = {
  onRemoveClick: propTypes.func.isRequired
}

export default TrackControls
