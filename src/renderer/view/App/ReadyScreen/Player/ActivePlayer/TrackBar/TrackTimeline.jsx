import React from 'react'
import propTypes from 'prop-types'

import './TrackTimeline.css'

class TrackTimeline extends React.PureComponent {
  state = {
    seekValue: undefined
  }
  handleRangeChange = e => {
    const { value } = e.currentTarget
    this.setState({
      seekValue: Number(value)
    })
  }
  handleRangeMouseUp = () => {
    const { onStopSeeking } = this.props
    const { seekValue } = this.state
    if (seekValue) {
      onStopSeeking(this.state.seekValue)
    }
  }
  handleRangeKeyUp = (e) => {
    if (e.keyCode === 37 || e.keyCode === 39) {
      const { onStopSeeking } = this.props
      const { seekValue } = this.state
      if (seekValue) {
        onStopSeeking(this.state.seekValue)
      }
    }
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.currentTime === this.state.seekValue) {
      this.setState({
        seekValue: undefined
      })
    }
  }
  render () {
    const { currentTime, duration } = this.props
    const { seekValue } = this.state
    const nextValue = seekValue || currentTime
    return (
      <input
        className='timelineInput'
        type='range'
        min='0'
        max={duration}
        value={nextValue}
        onChange={this.handleRangeChange}
        onMouseUp={this.handleRangeMouseUp}
        onKeyUp={this.handleRangeKeyUp}
      />
    )
  }
}

TrackTimeline.propTypes = {
  currentTime: propTypes.number.isRequired,
  duration: propTypes.number.isRequired,
  onStopSeeking: propTypes.func.isRequired
}

export default TrackTimeline
