import React from 'react'

const ProgressBar = ({ progress, message }) => (
  <div className='progress-bar__container izi-y'>
    <div className='progress-bar__full'>
      <div className='progress-bar__ready' style={{ width: progress + '%' }} />
    </div>
    <small className='progress-bar__message izi-margin-top izi-uppercase'>{message}</small>
  </div>
)

export default ProgressBar
