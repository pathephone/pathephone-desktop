import React from 'react'

import './ModalWindow.css'

const ModalWindow = ({ children }) => {
  return (
    <div className='modal-window'>
      { children }
    </div>
  )
}

export default ModalWindow
