import React from 'react'

const PlaylistTrack = ({ title, artist, isCurrent, id }) => {
  console.log(title)
  return (
    <div className='playlist_track izi-x'>
      <div className='izi-yl izi-margin-left'>
        <span className='track_title'>
          {title}
        </span>
        <span className='track_artist'>
          {artist}
        </span>
      </div>
    </div>
  )
}

export default PlaylistTrack
