import React from 'react'
import propTypes from 'prop-types'
import PlaylistTrackConnected from './PlaylistTrackConnected'

class PlaylistTrackContainer extends React.Component {
  render () {
    const {
      isRemoved,
      index
    } = this.props
    if (isRemoved) return null
    return (
      <PlaylistTrackConnected index={index} />
    )
  }
}

PlaylistTrackContainer.propTypes = {
  isRemoved: propTypes.bool.isRequired,
  index: propTypes.number.isRequired
}

export default PlaylistTrackContainer
