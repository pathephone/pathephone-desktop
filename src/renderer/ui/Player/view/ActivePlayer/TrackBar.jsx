
import React from 'react';

import TrackInfo from './TrackBar/TrackInfo';
import TrackTimeline from './TrackBar/TrackTimeline';
import TrackBuffer from './TrackBar/TrackBuffer';

import './TrackBar.css';

const TrackBar = props => (
  <div className="playerTrackBar">
    <TrackBuffer {...props} />
    <TrackInfo {...props} />
    <TrackTimeline {...props} />
  </div>
);

export default TrackBar;
