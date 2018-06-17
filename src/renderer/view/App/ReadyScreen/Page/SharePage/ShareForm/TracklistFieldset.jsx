import React from 'react'
import propTypes from 'prop-types'

import TrackInput from './TracklistFieldset/TrackInput.jsx'

import './TracklistFieldset.css'
import { E2E_SHARE_FORM_TRACKLIST_ID, E2E_SHARE_FORM_ADD_TRACK_INPUT_ID } from '~data/e2eConstants'

class TracklistFieldset extends React.PureComponent {
  handleMap = (track, index, tracks) => {
    const {
      onRemoveTrack,
      onMoveTrackDown,
      onMoveTrackUp
    } = this.props

    const fileName = track.file
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
      <fieldset
        disabled={isDisabled}
        className='fieldset tracklistFieldset'
      >
        <legend>{`Tracklist (${tracks.length} tracks)`}</legend>
        <div id={E2E_SHARE_FORM_TRACKLIST_ID}>
          {
            tracks.map(this.handleMap)
          }
        </div>
        <input
          id={E2E_SHARE_FORM_ADD_TRACK_INPUT_ID}
          className='addTracksInput hiddenButReachable'
          type='file'
          accept='audio/*'
          onChange={onFilesSelect}
          multiple
        />
        <label
          htmlFor={E2E_SHARE_FORM_ADD_TRACK_INPUT_ID}
          className='addTracksLabel'
        >
          add tracks <br />
          {
            tracks.length === 0 && (
              <span className='noTracksMessage'>
                you should add at least one track
              </span>
            )
          }
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
