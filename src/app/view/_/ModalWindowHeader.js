import React from 'react'
import MdClose from 'react-icons/lib/md/close'
import './ModalWindowHeader.css'

const ModalWindowHeader = ({ title, onClose }) => (
  <div className='mw-header izi-padding izi-fill-width izi-x'>
    <b className='mw-header__title'>{title}</b>
    <button id='add-album_close' className='round-button mw-header__close izi-margin-left-auto' onClick={onClose}>
      <MdClose />
    </button>
  </div>
)

export default ModalWindowHeader
