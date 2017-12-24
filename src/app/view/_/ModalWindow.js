import React from 'react'

const ModalWindow = ({ children }) => {
  return (
    <div className='modal-window'>
      { children }
      <style jsx>{`
.modal-window {
  background-color: white;
  width: 100%;
  max-width: 35em;
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
