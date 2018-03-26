import React from 'react'
import PlaylistTrack from './PlaylistTrack'

import clearPlaylist from './clearPlaylist'

import './PlaylistView.css'

const PlaylistView = ({ playlist }) => {
  const handlePlaylistMap = (track, index) => {
    return <PlaylistTrack {...track} key={track.id} />
  }
  return (
    <div className='playlist izi-ys' >
      {
        playlist.length > 0 ? (
          <button className='playlist__clear-button' onClick={clearPlaylist}>
            clear
          </button>
        ) : (
          <label className='playlist__empty-message'>playlist is empty</label>
        )
      }
      {
        playlist.map(handlePlaylistMap)
      }
    </div>
  )
}

export default PlaylistView
