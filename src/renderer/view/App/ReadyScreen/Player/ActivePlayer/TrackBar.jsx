
import React from 'react'

import TrackInfo from './TrackBar/TrackInfo.jsx'
import TrackTimeline from './TrackBar/TrackTimeline.jsx'
import TrackBuffer from './TrackBar/TrackBuffer.jsx'

import './TrackBar.css'

const TrackBar = (props) => (
  <div className='playerTrackBar'>
    <TrackBuffer {...props} />
    <TrackInfo {...props} />
    <TrackTimeline {...props} />
  </div>
)

export default TrackBar
