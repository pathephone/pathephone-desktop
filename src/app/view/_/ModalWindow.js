import React from 'react'

const ModalWindow = ({ onClose, children }) => {
  return (
    <div className='modal-window'>
      {
        onClose && (
          <div className='izi-padding'>
            <button onClick={onClose}>
              x
            </button>
          </div>
        )
      }
      { children }
      <style jsx>{`
.modal-window {
  background-color: white;
  width: 100%;
  max-width: 30em;
}
      `}</style>
    </div>
  )
}

export default ModalWindow
