import React from 'react'
import propTypes from 'prop-types'
import PlaylistTrackContainerConnected from './PlaylistTrackContainerConnected'

const Tracklist = ({ lastTrackIndex }) => (
  <div>
    {
      [...Array(lastTrackIndex).keys(), lastTrackIndex].map((index) => (
        <PlaylistTrackContainerConnected index={index} key={index} />
      ))
    }
  </div>
)

Tracklist.propTypes = {
  lastTrackIndex: propTypes.number.isRequired
}

export default Tracklist
