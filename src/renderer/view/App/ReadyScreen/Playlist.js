import React from 'react'
import propTypes from 'prop-types'

import PlaylistTrack from './Playlist/PlaylistTrack'

import './Playlist/Playlist.css'

const Playlist = ({ tracks, clearPlaylist, removeTrack, playTrack }) => {
  const handleTracksMap = (track, index) => {
    return (
      <PlaylistTrack
        {...track}
        onRemove={removeTrack}
        onPlay={playTrack}
        key={track.id}
      />
    )
  }
  return (
    <div className='playlist izi-ys' >
      {
        tracks.length > 0 ? (
          <button className='playlist__clear-button' onClick={clearPlaylist}>
            clear
          </button>
        ) : (
          <label className='playlist__empty-message'>playlist is empty</label>
        )
      }
      {
        tracks.map(handleTracksMap)
      }
    </div>
  )
}

Playlist.propTypes = {
  tracks: propTypes.array.isRequired,
  clearPlaylist: propTypes.func.isRequired,
  removeTrack: propTypes.func.isRequired,
  playTrack: propTypes.func.isRequired
}

export default Playlist
