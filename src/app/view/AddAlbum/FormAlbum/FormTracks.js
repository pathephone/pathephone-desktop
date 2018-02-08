import React from 'react'
import TrackInput from './TrackInput'
import TrackFileInput from './TrackFileInput'
import MdClear from 'react-icons/lib/md/clear'
import MdDown from 'react-icons/lib/md/keyboard-arrow-down'
import MdUp from 'react-icons/lib/md/keyboard-arrow-up'

import './FormTracks.css'

class TracksInput extends React.Component {
  TrackControls = ({ index, first, last }) => {
    const { onDeleteTrack, onMoveTrackUp, onMoveTrackDown } = this.props
    const onDelete = () => { onDeleteTrack(index) }
    const onUp = () => { onMoveTrackUp(index) }
    const onDown = () => { onMoveTrackDown(index) }
    return (
      <div className='izi-y izi-center izi-margin-left'>
        <button
          className='track-form__control-button'
          disabled={first}
          onClick={onUp}
        >
          <MdUp />
        </button>
        <button
          onClick={onDelete}
          className='track-form__control-button'
        >
          <MdClear />
        </button>
        <button
          className='track-form__control-button'
          disabled={last}
          onClick={onDown}
        >
          <MdDown />
        </button>
      </div>
    )
  }
  TrackInputWrapper = (track, index, tracks) => {
    const { onTrackChange } = this.props
    const onChange = (e) => {
      const { name, value } = e.currentTarget
      onTrackChange(index, name, value)
    }
    return [
      <div className='izi-xs' key='container'>
        <TrackInput
          index={index}
          value={track}
          onChange={onChange}
        />
        <this.TrackControls
          index={index}
          first={index === 0}
          last={index === tracks.length - 1}
        />
      </div>,
      <hr key='separator' />
    ]
  }
  render () {
    const { value, onAddTracks } = this.props
    return (
      <fieldset className='izi-ys'>
        <legend>{`Tracklist (${value.tracks.length} tracks)`}</legend>
        {
          value.tracks.map(this.TrackInputWrapper)
        }
        <span>
          <TrackFileInput onNewTracks={onAddTracks} />
        </span>
      </fieldset>
    )
  }
}

export default TracksInput
