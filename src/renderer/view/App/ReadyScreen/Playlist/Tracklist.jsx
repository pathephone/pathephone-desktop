import React from 'react'
import propTypes from 'prop-types'
import PlaylistTrackConnected from './PlaylistTrackConnected'

const handleMap = track => (
  <PlaylistTrackConnected {...track} key={track.id} />
)

const Tracklist = ({ tracks }) => (
  <div>
    {
      tracks.map(handleMap)
    }
  </div>
)

Tracklist.propTypes = {
  tracks: propTypes.array.isRequired
}

export default Tracklist
