import React from 'react'

const ModalLayer = ({ children, onMissClick }) => {
  const onClick = e => {
    if (e.target === e.currentTarget) {
      console.log('HUTAY')
      onMissClick()
    }
  }
  return(
    <div
      className='modal-layer izi-fixed izi-fill izi-top izi-left izi-y'
      onClick={onMissClick && onClick}
    >
      {children}
      <style jsx>{`
.modal-layer {
  background-color: rgba(10,10,10,0.5);
  overflow-y: auto;
}
      `}</style>
    </div>
  )
}

export default ModalLayer