import React from 'react'

var secondsTohhmmss = function (totalSeconds) {
  var hours = Math.floor(totalSeconds / 3600)
  var minutes = Math.floor((totalSeconds - (hours * 3600)) / 60)
  var seconds = Math.floor(totalSeconds - (hours * 3600) - (minutes * 60))

  // round seconds
  seconds = Math.round(seconds * 100) / 100

  var result = (hours === 0 ? '' : (hours < 10 ? '0' + hours : hours) + ':')
  result += (minutes === 0 ? '' : (minutes < 10 ? '0' + minutes : minutes) + ':')
  result += seconds < 10 ? '0' + seconds : seconds
  return result
}

const TrackTimeline = ({ position, length, onChange, className }) => {
  const handleChange = e => {
    const { value } = e.currentTarget
    onChange(parseInt(value))
  }
  return (
    <div className='izi-x izi-fill-width'>
      <input
        type='range'
        min='0'
        max={length}
        value={position}
        onChange={handleChange}
        className='izi-fill-width'
      />
      <small className='duration izi-margin-left'>{secondsTohhmmss(length)}</small>
      <style jsx>{`
.duration {
  flex-shrink: 0;
}
      `}</style>
    </div>
  )
}

export default TrackTimeline
