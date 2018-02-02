import React from 'react'
import PlaylistTrack from './PlaylistTrack'
import clearPlaylist from './clearPlaylist'

import './PlaylistView.css'

const PlaylistView = ({ playlist }) => {
  const SingleTrackWrapper = track => {
    return <PlaylistTrack {...track} key={track.id} />
  }
  return (
    <div className='playlist izi-ys' >
      {
        playlist.length > 0 ? (
          <button onClick={clearPlaylist}>
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
