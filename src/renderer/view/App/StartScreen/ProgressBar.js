import React from 'react'
import propTypes from 'prop-types'

const ProgressBar = ({ percent, message }) => (
  <div className='progress-bar__container izi-y'>
    <div className='progress-bar__full'>
      <div className='progress-bar__ready' style={{ width: percent + '%' }} />
    </div>
    <small className='progress-bar__message izi-margin-top izi-uppercase'>{message}</small>
  </div>
)

ProgressBar.propTypes = {
  percent: propTypes.number.isRequired,
  message: propTypes.string.isRequired
}

export default ProgressBar
