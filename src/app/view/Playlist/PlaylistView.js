import React from 'react'
import PlaylistTrack from './PlaylistTrack'
import clearPlaylist from './clearPlaylist'

import './PlaylistView.css'

const PlaylistView = ({ playlist }) => {
  const SingleTrackWrapper = (track, index) => {
    const contrast = index % 2
    return <PlaylistTrack {...track} contrast={contrast} key={track.id} />
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
        playlist.map(SingleTrackWrapper)
      }
    </div>
  )
}

export default PlaylistView
