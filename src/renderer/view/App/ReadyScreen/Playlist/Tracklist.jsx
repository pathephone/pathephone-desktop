import React from 'react'
import propTypes from 'prop-types'
import PlaylistTrackContainerConnected from './PlaylistTrackContainerConnected'

const Tracklist = ({ tracksIndexes }) => (
  <div>
    {
      tracksIndexes.map((index) => (
        <PlaylistTrackContainerConnected index={index} key={index} />
      ))
    }
  </div>
)

Tracklist.propTypes = {
  tracksIndexes: propTypes.array.isRequired
}

export default Tracklist
