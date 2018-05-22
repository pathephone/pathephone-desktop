import React from 'react'
import propTypes from 'prop-types'

import secondsTohhmmss from '~utils//secondsTohhmmss'

import BufferedBarConnected from './TrackTimiline/BufferedBarConnected'

import './TrackTimeline.css'

class TrackTimeline extends React.PureComponent {
  state = {
    seekValue: null
  }
  handleRangeChange = e => {
    const { value } = e.currentTarget
    this.setState({
      seekValue: value
    })
  }
  handleRangeMouseUp = () => {
    const { onStopSeeking } = this.props
    onStopSeeking(Number(this.state.seekValue))
    this.setState({
      seekValue: null
    })
  }
  render () {
    const { currentTime, duration, hasBufferedBar } = this.props
    const { seekValue } = this.state
    return (
      <div className='timeline izi-relative'>
        <div className='timeline__input-container'>
          <input
            className='custom-range-input timeline__input'
            type='range'
            min='0'
            max={duration}
            value={seekValue || currentTime}
            onChange={this.handleRangeChange}
            onMouseUp={this.handleRangeMouseUp}
          />
          {
            hasBufferedBar && (
              <BufferedBarConnected />
            )
          }
        </div>
        <small className='timeline__duration'>{secondsTohhmmss(duration)}</small>
      </div>
    )
  }
}

TrackTimeline.propTypes = {
  hasBufferedBar: propTypes.bool.isRequired,
  currentTime: propTypes.number.isRequired,
  duration: propTypes.number.isRequired,
  onStopSeeking: propTypes.func.isRequired
}

export default TrackTimeline
