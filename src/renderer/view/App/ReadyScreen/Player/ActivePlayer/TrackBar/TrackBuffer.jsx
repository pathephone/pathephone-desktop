import React from 'react';
import propTypes from 'prop-types';

import './TrackBuffer.css';

const handleMapBuffer = ([start, end]) => {
  const style = {
    width: `${end - start}%`,
    left: `${start}%`,
  };
  return <div className="timeline__buffered-piece" style={style} key={`${start}-${end}`} />;
};

const TrackBuffer = ({ bufferedMap }) => (
  <div className="timeline__buffered-container">
    {
      bufferedMap
        && bufferedMap.map(handleMapBuffer)
    }
  </div>
);

TrackBuffer.propTypes = {
  bufferedMap: propTypes.array,
};

export default TrackBuffer;
