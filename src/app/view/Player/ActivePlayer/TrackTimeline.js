import React from 'react'

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
    </div>
  )
}

export default TrackTimeline
