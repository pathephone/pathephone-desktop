import React from 'react'
import './TrackTimeline.css'

var secondsTohhmmss = function (totalSeconds) {
  var hours = Math.floor(totalSeconds / 3600)
  var minutes = Math.floor((totalSeconds - (hours * 3600)) / 60)
  var seconds = Math.floor(totalSeconds - (hours * 3600) - (minutes * 60))

  // round seconds
  seconds = Math.round(seconds * 100) / 100

  var result = (hours === 0 ? '' : (hours < 10 ? '0' + hours : hours) + ':')
  result += (minutes === 0 ? '' : (minutes < 10 ? '0' + minutes : minutes) + ':')
  result += seconds < 10 ? '0' + seconds : seconds
  return result
}

const handleMapBuffer = ([start, end]) => {
  const style = {
    width: end - start + '%',
    left: start + '%'
  }
  return <div className='timeline__buffered-piece' style={style} key={start + '-' + end} />
}

class TrackTimeline extends React.Component {
  prepareTime = false
  render () {
    const { position, length, onChange, buffered } = this.props
    const handleChange = e => {
      const { value } = e.currentTarget
      onChange({
        time: parseInt(value),
        prepare: this.prepareTime
      })
    }
    console.log(buffered)
    return (
      <div className='timeline izi-relative'>
        <div className='timeline__input-container'>
          <input
            className='custom-range-input timeline__input'
            type='range'
            min='0'
            max={length}
            value={position}
            onChange={handleChange}
            ref={(node) => { this.rangePicker = node }}
            onMouseDown={() => { this.prepareTime = true }}
            onMouseUp={() => {
              this.prepareTime = false
              handleChange({currentTarget: this.rangePicker})
            }}
          />
          <div className='timeline__buffered-container'>
            {
              buffered.length > 0 && buffered.map(handleMapBuffer)
            }
          </div>
        </div>
        <small className='timeline__duration'>{secondsTohhmmss(length)}</small>
      </div>
    )
  }
}

export default TrackTimeline
