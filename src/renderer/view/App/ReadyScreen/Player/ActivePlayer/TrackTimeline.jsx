import React from 'react'
import propTypes from 'prop-types'

import secondsTohhmmss from '~/utils/secondsTohhmmss'

import './TrackTimeline.css'

const handleMapBuffer = ([ start, end ]) => {
  const style = {
    width: end - start + '%',
    left: start + '%'
  }
  return <div className='timeline__buffered-piece' style={style} key={start + '-' + end} />
}

const TrackTimeline = (props) => {
  const { currentPosition, length, onStartSeeking, onStopSeeking, bufferedMap } = props
  const handleMouseUp = e => {
    const { value } = e.currentTarget
    onStopSeeking(value)
  }
  const handleMouseDown = onStartSeeking
  return (
    <div className='timeline izi-relative'>
      <div className='timeline__input-container'>
        <input
          className='custom-range-input timeline__input'
          type='range'
          min='0'
          max={length}
          value={currentPosition}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
        />
        <div className='timeline__buffered-container'>
          {
            bufferedMap.length > 0 && bufferedMap.map(handleMapBuffer)
          }
        </div>
      </div>
      <small className='timeline__duration'>{secondsTohhmmss(length)}</small>
    </div>
  )
}

TrackTimeline.propTypes = {
  bufferedMap: propTypes.array.isRequired,
  currentPosition: propTypes.number.isRequired,
  length: propTypes.number.isRequired,
  onStartSeeking: propTypes.func.isRequired,
  onStopSeeking: propTypes.func.isRequired
}

export default TrackTimeline
