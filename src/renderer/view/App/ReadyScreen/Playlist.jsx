import React from 'react'
import propTypes from 'prop-types'

import TracklistConnected from './Playlist/TracklistConnected'
import PlaylistControlsConnected from './Playlist/PlaylistControlsConnected'

import './Playlist.css'

const Playlist = ({ hasTracklist }) => {
  return (
    <div className='playlist' >
      {
        hasTracklist ? (
          <React.Fragment>
            <PlaylistControlsConnected />
            <TracklistConnected />
          </React.Fragment>
        ) : (
          <label className='playlist__empty-message'>playlist is empty</label>
        )
      }
    </div>
  )
}

Playlist.propTypes = {
  hasTracklist: propTypes.bool.isRequired
}

export default Playlist
