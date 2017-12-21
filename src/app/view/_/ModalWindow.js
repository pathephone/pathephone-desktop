import React from 'react'
import MdClose from 'react-icons/lib/md/close'
const ModalWindow = ({ onClose, title, children }) => {
  return (
    <div className='modal-window'>
      {
        (onClose || title) && (
          <div className='izi-orange-bg izi-padding izi-fill-width izi-x'>
            {
              title && (
                <h1>{title}</h1>
              )
            }
            {
              onClose && (
                <button className='izi-margin-left-auto' onClick={onClose}>
                  <MdClose />
                </button>
              )
            }
          </div>
        )
      }
      { children }
      <style jsx>{`
.modal-window {
  background-color: white;
  width: 100%;
  max-width: 30em;
  margin-top: calc(1em + 0.25vw);
  margin-left: 1em;
  margin-right: 1em;
  margin-bottom: 1em;
}
      `}</style>
    </div>
  )
}

export default ModalWindow
