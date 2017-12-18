import React from 'react'
import TrackInput from './TrackInput'

class TracksInput extends React.Component {
  TrackControls = ({ index }) => {
    const { onDeleteTrack } = this.props
    const onClick = () => { onDeleteTrack(index) }
    return (
      <div className='izi-y'>
        <button onClick={onClick}>
          x
        </button>
      </div>
    )
  }
  TrackInputWrapper = (value, index) => {
    return (
      <div className='izi-xu' key={JSON.stringify(value) + index}>
        <TrackInput value={value} />
        <this.TrackControls index={index} />
      </div>
    )
  }
  render () {
    const { value, onAddTrack } = this.props
    return (
      <div className='izi-ys izi--gap'>
        {
          value.tracks.map(this.TrackInputWrapper)
        }
        <button onClick={onAddTrack}>
          add track
        </button>
      </div>
    )
  }
}

export default TracksInput
