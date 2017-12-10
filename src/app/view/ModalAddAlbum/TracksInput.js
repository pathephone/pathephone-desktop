import React from 'react'
import TrackInput from './TrackInput'

class TracksInput extends React.Component {
  state = {
    value: this.props.value
  }
  addTrack = () => {
    const { value } = this.state
    value.push
  }
  deleteTrack = (index) => {
    const { onChange } = this.props
    const { value } = this.state
    value.splice(index, 1)
    this.setState({ value })
    onChange && onChange()
  }
  TrackControls = ({ index }) => {
    const onClick = () => { this.deleteTrack(index) }
    return(
      <div className='izi-y'>
        <button onClick={onClick}>
          x
        </button>
      </div>
    )
  }
  TrackInputWrapper = (value, index) => {
    const { onChange } = this.props
    return(
      <div className='izi-x'>
        <TrackInput value={value} onChange={onChange} />
        <TrackControls index={index} />
      </div>
    )
  }
  render() {
    const { value } = this.props
    return (
      <div className='izi-y'>
        {value.map(TrackInput)}
        <button onClick={this.addTrack}>
          add track
        </button>
      </div>
    )
  }
}

export default TracksInput