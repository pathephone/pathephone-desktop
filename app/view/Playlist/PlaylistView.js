import React from 'react'
import PlaylistTrack from './PlaylistTrack'

const PlaylistView = ({ playlist, currentTrack }) => {
  return (
    <div className='playlist izi-ys' >
      {
        playlist.map((track) => {
          console.log(track)
          const isCurrent = currentTrack.id === track.id
          return <PlaylistTrack {...track} isCurrent={isCurrent} key={track.id} />
        })
      }
    </div>
  )
}

export default PlaylistView
