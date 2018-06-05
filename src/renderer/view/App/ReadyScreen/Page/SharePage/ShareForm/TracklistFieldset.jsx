import React from 'react'
import propTypes from 'prop-types'

import TrackInput from './TracklistFieldset/TrackInput.jsx'

import './TracklistFieldset.css'

const ADD_TRACK_INPUT_ID = 'share-form__add-tracks-input'

class TracklistFieldset extends React.PureComponent {
  handleMap = (track, index, tracks) => {
    const {
      onRemoveTrack,
      onMoveTrackDown,
      onMoveTrackUp
    } = this.props

    const fileName = track.file && track.file.name
    const cid = track.cid
    return (
      <TrackInput
        index={index}
        fileName={fileName}
        cid={cid}
        onRemoveTrack={onRemoveTrack}
        onMoveTrackDown={onMoveTrackDown}
        onMoveTrackUp={onMoveTrackUp}
        isMoveUpDisabled={index === 0}
        isMoveDownDisabled={index === tracks.length - 1}
        key={index}
      />
    )
  }
  render () {
    const {
      tracks,
      isDisabled,
      onFilesSelect
    } = this.props
    return (
      <fieldset disabled={isDisabled} className='fieldset tracklistFieldset'>
        <legend>{`Tracklist (${tracks.length} tracks)`}</legend>
        {
          tracks.map(this.handleMap)
        }
        <input
          id={ADD_TRACK_INPUT_ID}
          className='addTracksInput hiddenButReachable'
          type='file'
          accept='audio/*'
          onChange={onFilesSelect}
          multiple
        />
        <label htmlFor={ADD_TRACK_INPUT_ID} className='addTracksLabel'>
          add tracks
        </label>
      </fieldset>
    )
  }
}

TracklistFieldset.propTypes = {
  isDisabled: propTypes.bool.isRequired,
  tracks: propTypes.array.isRequired,
  onFilesSelect: propTypes.func.isRequired,
  onMoveTrackDown: propTypes.func.isRequired,
  onMoveTrackUp: propTypes.func.isRequired,
  onRemoveTrack: propTypes.func.isRequired
}

export default TracklistFieldset
