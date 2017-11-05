import React from 'react'
import PlaylistTrack from './PlaylistTrack'

const PlaylistView = ({ playlist }) => {
  console.log(playlist)
  return (
    <div className='playlist izi-ys' >
      {
        playlist.map(PlaylistTrack)
      }
    </div>
  )
}

export default PlaylistView
