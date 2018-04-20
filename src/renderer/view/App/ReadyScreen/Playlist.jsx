import React from 'react'
import propTypes from 'prop-types'

import PlaylistTrackConnected from './Playlist/PlaylistTrackConnected'

import './Playlist.css'

const Playlist = ({ tracks, onClearPlaylist }) => {
  return (
    <div className='playlist izi-ys' >
      {
        tracks.length > 0 ? (
          <button className='playlist__clear-button' onClick={onClearPlaylist}>
            clear
          </button>
        ) : (
          <label className='playlist__empty-message'>playlist is empty</label>
        )
      }
      {
        tracks.map(PlaylistTrackConnected)
      }
    </div>
  )
}

Playlist.propTypes = {
  tracks: propTypes.array.isRequired,
  onClearPlaylist: propTypes.func.isRequired
}

export default Playlist
