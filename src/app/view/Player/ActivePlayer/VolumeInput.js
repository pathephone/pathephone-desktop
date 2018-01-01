import React from 'react'
import MdVolumeUp from 'react-icons/lib/md/volume-up'
import MdVolumeDown from 'react-icons/lib/md/volume-down'
import MdVolumeMute from 'react-icons/lib/md/volume-mute'
import MdVolumeOff from 'react-icons/lib/md/volume-off'

const VolumeInput = ({ value, onChange }) => {
  const handleChange = e => {
    const { value } = e.currentTarget
    onChange(value / 100)
  }
  const inputValue = value * 100
  return (
    <div className='izi-x'>
      {
        inputValue === 0 ? (
          <MdVolumeOff />
        ) : inputValue < 33 ? (
          <MdVolumeMute />
        ) : inputValue < 66 ? (
          <MdVolumeDown />
        ) : (
          <MdVolumeUp />
        )
      }
      <input
        type='range'
        min='0'
        max='100'
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  )
}

export default VolumeInput
