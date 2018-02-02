import React from 'react'

const ProgressBar = ({ progress, message }) => (
  <div className='progress-bar__container izi-y'>
    <div className='progress-bar__full'>
      <div className='progress-bar__ready' />
    </div>
    <small className='progress-bar__message izi-margin-top'>{message}</small>
    <style jsx>{`
.progress-bar__full {
  border-radius: 2px;
  overflow: hidden;
  width: 30em;
  background-color: #dedede;
}
.progress-bar__ready {
  height: 0.25em;
  width: ${progress}%;
  background-color: orange;
}
    `}</style>
  </div>
)

export default ProgressBar
