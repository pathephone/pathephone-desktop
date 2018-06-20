import React from 'react'
import propTypes from 'prop-types'

import secondsTohhmmss from '~utils//secondsTohhmmss'

import './TrackInfo.css'

const TrackInfo = ({ title, artist, duration }) => (
  <div className='playerTrackInfo'>
    <div className='playerTrackInfoLeft'>
      <div className='playerTrackTitle'>
        {title}
      </div>
      <small className='playerTrackArtist'>
        by {artist}
      </small>
    </div>
    <div className='playerTrackInforRight'>
      <small className='playerTrackDuration'>
        {secondsTohhmmss(duration)}
      </small>
    </div>
  </div>
)

TrackInfo.propTypes = {
  title: propTypes.string.isRequired,
  artist: propTypes.string.isRequired,
  duration: propTypes.number.isRequired
}

export default TrackInfo
