import React from 'react'
import MdVolumeUp from 'react-icons/lib/md/volume-up'
import MdVolumeDown from 'react-icons/lib/md/volume-down'
import MdVolumeMute from 'react-icons/lib/md/volume-mute'
import MdVolumeOff from 'react-icons/lib/md/volume-off'

const VolumeInput = ({ value, onChange }) => {
  const handleChange = e => {
    const { value } = e.currentTarget
    onChange(parseInt(value))
  }
  return (
    <div className='izi-x'>
      {
        value === 0 ? (
          <MdVolumeOff />
        ) : value < 33 ? (
          <MdVolumeMute />
        ) : value < 66 ? (
          <MdVolumeDown />
        ) : (
          <MdVolumeUp />
        )
      }
      <input
        type='range'
        min='0'
        max='100'
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}

export default VolumeInput
