import React from 'react'
import propTypes from 'prop-types'

import TracklistConnected from './Playlist/TracklistConnected'

import './Playlist.css'

const Playlist = ({ hasTracklist, onClearPlaylist }) => {
  return (
    <div className='playlist izi-ys' >
      {
        hasTracklist ? (
          <button className='playlist__clear-button' onClick={onClearPlaylist}>
            clear
          </button>
        ) : (
          <label className='playlist__empty-message'>playlist is empty</label>
        )
      }
      {
        hasTracklist && (
          <TracklistConnected />
        )
      }
    </div>
  )
}

Playlist.propTypes = {
  onClearPlaylist: propTypes.func.isRequired,
  hasTracklist: propTypes.bool.isRequired
}

export default Playlist
