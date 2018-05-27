import React from 'react'
import propTypes from 'prop-types'

import TrackInput from './TracklistFieldset/TrackInput.jsx'

class TracklistFieldset extends React.PureComponent {
  handleMap = (track, index, tracks) => {
    const fileName = track.file ? track.file.name : track.cid
    return (
      <TrackInput
        index={index}
        fileName={fileName}
        key={index}
      />
    )
  }
  render () {
    const {
      tracks,
      isDisabled,
      onRemoveTrack,
      onMoveTrackDown,
      onMoveTrackUp,
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
  tracks: propTypes.array.isRequired
}

export default TracklistFieldset
