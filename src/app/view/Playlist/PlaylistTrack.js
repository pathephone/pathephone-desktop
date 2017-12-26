import React from 'react'
import MdClose from 'react-icons/lib/md/close'

const PlaylistTrack = ({ title, artist, current, id, onPlay, onPause, onRemove }) => {
  const handleClick = () => {
    if (!current) {
      onPlay(id)
    } else {
      onPause()
    }
  }
  const handleRemove = () => {
    onRemove(id)
  }
  return (
    <div
      className={`playlist-track ${current ? 'current' : ''} izi-xs`}
    >
      <button
        className='track-info izi-yl izi-fill-width izi-padding'
        onClick={handleClick}
      >
        <label className='title'>
          {title}
        </label>
        <small className='artist'>
          {artist}
        </small>
      </button>
      <button
        className='remove-button'
        onClick={handleRemove}
      >
        <MdClose />
      </button>
      <style jsx>{`
.track-info, .remove-button {
  background: none;
  border: none;
  text-align: left;
}
.playlist-track.current {
  border-left: 2px solid orange;
  background: rgb(220,220,220);
}
.artist {
  color: darkgray;
  margin-top: 0.5em;
}
.playlist-track:not(:hover) .remove-button {
  visibility: hidden;
}

.remove-button {
  flex-shrink: 0;
}
.remove-button:hover {
  flex-shrink: 0;
  background: rgb(190,190,190);
}
      `}</style>
    </div>
  )
}

export default PlaylistTrack
