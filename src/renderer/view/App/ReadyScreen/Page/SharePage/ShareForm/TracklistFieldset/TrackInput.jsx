import React from 'react';
import propTypes from 'prop-types';

import MdDec from 'react-icons/lib/md/blur-on';
import MdFile from 'react-icons/lib/md/insert-drive-file';

import i18n from '~shared/data/i18n';

import CustomTextInput from '~components/CustomTextInput';

import TrackControlsLeft from './TrackControlsLeft';
import TrackControlsRight from './TrackControlsRight';

import './TrackInput.css';

const TRACK_ARTIST_ID = 'track-artist-input';
const TRACK_TITLE_ID = 'track-title-id';

class TrackInput extends React.PureComponent {
  handleRemove = () => {
    const { index, onRemoveTrack } = this.props;
    onRemoveTrack(index);
  }

  handleMoveDown = () => {
    const { index, onMoveTrackDown } = this.props;
    onMoveTrackDown(index);
  }

  handleMoveUp = () => {
    const { index, onMoveTrackUp } = this.props;
    onMoveTrackUp(index);
  }

  render() {
    const {
      index,
      fileName,
      cid,
      isMoveUpDisabled,
      isMoveDownDisabled,
    } = this.props;
    return (
      <div className="trackInput">
        <div className="trackInputControlsLeft">
          <TrackControlsLeft
            onMoveUpClick={this.handleMoveUp}
            onMoveDownClick={this.handleMoveDown}
            isMoveDownDisabled={isMoveDownDisabled}
            isMoveUpDisabled={isMoveUpDisabled}
          />
        </div>
        <div className="trackInputBody">
          <div className="trackInputSplit">
            <label htmlFor={TRACK_ARTIST_ID}>
              {i18n.ARTIST}
              <br />
              <CustomTextInput
                id={TRACK_ARTIST_ID}
                name={`tracks.${index}.artist`}
                placeholder={i18n.TRACK_ARTIST}
              />
            </label>
            <label htmlFor={TRACK_TITLE_ID}>
              {i18n.TITLE}
              <br />
              <CustomTextInput
                id={TRACK_TITLE_ID}
                name={`tracks.${index}.title`}
                placeholder={i18n.TRACK_TITLE}
              />
            </label>
          </div>
          <br />
          {
            fileName ? (
              <span>
                <MdFile />
                {' '}
                <span>
                  {fileName}
                </span>
              </span>
            ) : (
              <span>
                <MdDec />
                {' '}
                {cid}
              </span>
            )
          }
        </div>
        <div className="trackInputControlsRight">
          <TrackControlsRight
            onRemoveClick={this.handleRemove}
          />
        </div>
      </div>
    );
  }
}

TrackInput.defaultProps = {
  cid: null,
  fileName: null,
};

TrackInput.propTypes = {
  index: propTypes.number.isRequired,
  fileName: propTypes.string,
  cid: propTypes.string,
  onRemoveTrack: propTypes.func.isRequired,
  onMoveTrackUp: propTypes.func.isRequired,
  onMoveTrackDown: propTypes.func.isRequired,
  isMoveDownDisabled: propTypes.bool.isRequired,
  isMoveUpDisabled: propTypes.bool.isRequired,
};

export default TrackInput;
