import React from 'react'

const PlaylistTrack = ({ title, artist, current, id, onPlay, onPause }) => {
  const handleClick = () => {
    if (!current) {
      onPlay(id)
    } else {
      onPause()
    }
  }
  return (
    <button
      className={`playlist_track ${current ? 'current' : ''} izi-padding izi-x`}
      onClick={handleClick}
    >
      <div className='izi-yl'>
        <label className='track_title'>
          {title}
        </label>
        <small className='track_artist'>
          {artist}
        </small>
      </div>
      <style jsx>{`
.playlist_track {
  background: none;
  outline: none;
  border: none;
  text-align: left;
}
.playlist_track.current {
  border-left: 2px solid orange;
  background: rgb(220,220,220);
}
.track_artist {
  color: darkgray;
  margin-top: 0.5em;
}
      `}</style>
    </button>
  )
}

export default PlaylistTrack
