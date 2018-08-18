import React from 'react';
import propTypes from 'prop-types';

import {
  i18n,
} from '~data';
import e2e from '~data/e2e';

import TrackInput from './TracklistFieldset/TrackInput';

import './TracklistFieldset.css';

class TracklistFieldset extends React.PureComponent {
  handleMap = (track, index, tracks) => {
    const {
      onRemoveTrack,
      onMoveTrackDown,
      onMoveTrackUp,
    } = this.props;

    return (
      <TrackInput
        index={index}
        fileName={track.audio}
        onRemoveTrack={onRemoveTrack}
        onMoveTrackDown={onMoveTrackDown}
        onMoveTrackUp={onMoveTrackUp}
        isMoveUpDisabled={index === 0}
        isMoveDownDisabled={index === tracks.length - 1}
        key={index}
      />
    );
  }

  render() {
    const {
      tracks,
      isDisabled,
      onFilesSelect,
      errorMessage,
    } = this.props;
    return (
      <fieldset
        disabled={isDisabled}
        className="tracklistFieldset"
      >
        <legend>
          {`${i18n.TRACKLIST} (${tracks.length})`}
        </legend>
        <div id={e2e.SHARE_FORM_TRACKLIST_ID}>
          {
            tracks.map(this.handleMap)
          }
        </div>
        <div className="addTracksInputContainer">
          <input
            id={e2e.SHARE_FORM_ADD_TRACK_INPUT_ID}
            className="addTracksInput"
            name="tracks"
            type="file"
            accept="audio/*"
            onChange={onFilesSelect}
            multiple
          />
          <label
            htmlFor={e2e.SHARE_FORM_ADD_TRACK_INPUT_ID}
            className="addTracksLabel"
          >
            {i18n.ADD_TRACKS}
            {' '}
            <br />
            <span className="noTracksMessage">
              {errorMessage}
            </span>
          </label>
        </div>
      </fieldset>
    );
  }
}

TracklistFieldset.propTypes = {
  isDisabled: propTypes.bool.isRequired,
  errorMessage: propTypes.string.isRequired,
  tracks: propTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  onFilesSelect: propTypes.func.isRequired,
  onMoveTrackDown: propTypes.func.isRequired,
  onMoveTrackUp: propTypes.func.isRequired,
  onRemoveTrack: propTypes.func.isRequired,
};

export default TracklistFieldset;
