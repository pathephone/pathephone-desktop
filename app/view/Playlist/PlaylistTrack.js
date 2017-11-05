import React from 'react'

const PlaylistTrack = ({ title, artist, current, _id }) => {
  console.log(title)
  return (
    <div className='playlist_track izi-x' key={_id}>
      <button
        onClick={() => {
          if (current) {
            player('PAUSE', _id)
          } else {
            player('PLAY', _id)
          }
        }}
      >
        {
          current
            ? '||'
            : '>'
        }
      </button>
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
