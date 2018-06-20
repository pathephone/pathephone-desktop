import React from 'react'
import './ModalLayer.css'

const ModalLayer = ({ children, onClick, ...rest }) => {
  const onMissClick = e => {
    if (e.target === e.currentTarget) {
      onClick()
    }
  }
  return (
    <div
      {...rest}
      className='modal-layer'
      onClick={onClick && onMissClick}
    >
      {children}
    </div>
  )
}

export default ModalLayer
