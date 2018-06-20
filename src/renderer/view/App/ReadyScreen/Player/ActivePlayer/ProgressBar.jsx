import React from 'react'
import './ProgressBar.css'

class ProgressBar extends React.Component {
  render () {
    return (
      <div className='player-progress__container'>
        <div className='player-progress__outer'>
          <div className='player-progress__inner' />
        </div>
      </div>
    )
  }
}

export default ProgressBar
