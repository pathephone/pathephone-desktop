import React from 'react';
import propTypes from 'prop-types';

import secondsTohhmmss from '~shared/utils//secondsTohhmmss';

import './TrackInfo.css';

const TrackInfo = ({
  title, artist, duration, currentTime,
}) => (
  <div className="playerTrackInfo">
    <div className="playerTrackInfoLeft">
      <div className="playerTrackTitle">
        {title}
      </div>
      <small className="playerTrackArtist">
        by
        {' '}
        {artist}
      </small>
    </div>
    <div className="playerTrackInfoRight">
      <small>
        {
          currentTime > 0 && `${secondsTohhmmss(duration - currentTime)} / `
        }
        <span className="playerTrackDuration">
          {secondsTohhmmss(duration)}
        </span>
      </small>
    </div>
  </div>
);

TrackInfo.propTypes = {
  title: propTypes.string.isRequired,
  artist: propTypes.string.isRequired,
  duration: propTypes.number.isRequired,
  currentTime: propTypes.number.isRequired,
};

export default TrackInfo;
