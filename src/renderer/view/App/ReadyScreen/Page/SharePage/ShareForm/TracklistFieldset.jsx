import React from 'react'
import propTypes from 'prop-types'

import TrackInput from './TracklistFieldset/TrackInput.jsx'

class TracklistFieldset extends React.PureComponent {
  handleMap = (track, index, tracks) => {
    const {
      onRemoveTrack,
      onMoveTrackDown,
      onMoveTrackUp
    } = this.props

    const fileName = track.file ? track.file.name : track.cid
    return (
      <TrackInput
        index={index}
        fileName={fileName}
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
      <fieldset disabled={isDisabled} className='izi-ys'>
        <legend>{`Tracklist (${tracks.length} tracks)`}</legend>
        {
          tracks.map(this.handleMap)
        }
        <label>
          add tracks
          <input
            type='file'
            accept='audio/*'
            onChange={onFilesSelect}
            multiple
            hidden
          />
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
