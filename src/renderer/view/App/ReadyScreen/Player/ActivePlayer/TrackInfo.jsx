import React from 'react'
import propTypes from 'prop-types'

const TrackInfo = ({ title, artist }) => (
  <div>{title}<span className='player__artist-name'>by {artist}</span></div>
)

TrackInfo.propTypes = {
  title: propTypes.string.isRequired,
  artist: propTypes.string.isRequired
}

export default TrackInfo
