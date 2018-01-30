import React from 'react'
import MdClose from 'react-icons/lib/md/close'

const ModalWindowHeader = ({ title, onClose }) => (
  <div className='izi-padding izi-fill-width izi-x'>
    <b>{title}</b>
    <button id='add-album_close' className='izi-margin-left-auto' onClick={onClose}>
      <MdClose />
    </button>
  </div>
)

export default ModalWindowHeader
