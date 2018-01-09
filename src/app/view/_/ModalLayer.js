import React from 'react'

const ModalLayer = ({ children, onClick, ...rest }) => {
  const onMissClick = e => {
    if (e.target === e.currentTarget) {
      onClick()
    }
  }
  return (
    <div
      {...rest}
      className='modal-layer izi-fixed izi-fill izi-top izi-left izi-y'
      onClick={onClick && onMissClick}
    >
      {children}
      <style jsx>{`
.modal-layer {
  background-color: rgba(10,10,10,0.5);
  overflow-y: auto;
  z-index: 1;
}
      `}</style>
    </div>
  )
}

export default ModalLayer
