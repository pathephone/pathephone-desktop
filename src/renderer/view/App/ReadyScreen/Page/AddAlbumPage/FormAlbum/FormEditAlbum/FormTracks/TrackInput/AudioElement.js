import React from 'react'
import MdAudio from 'react-icons/lib/md/audiotrack'

import './AudioElement.css'

const AudioElement = ({ hash, name }) => (
  <div className='izi-x'>
    <MdAudio className='audio-element__icon' />
    <input
      value={hash}
      name={name}
      disabled
      className='audio-element__hash izi-dots izi-fill-width izi-margin-left' />
  </div>
)

export default AudioElement
