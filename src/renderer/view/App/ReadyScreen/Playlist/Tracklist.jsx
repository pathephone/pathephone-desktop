import React from 'react'
import propTypes from 'prop-types'
import PlaylistTrackContainerConnected from './PlaylistTrackContainerConnected'
import {
  E2E_PLAYLIST_TRAKLIST_ID
} from '~data/e2eConstants'

const Tracklist = ({ tracksIndexes }) => (
  <div id={E2E_PLAYLIST_TRAKLIST_ID}>
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
