import React from 'react'
import MdClose from 'react-icons/lib/md/close'
import setCurrentTrack from './setCurrentTrack'
import removeTrack from './removeTrack'

const PlaylistTrack = ({ title, artist, current, id }) => {
  const handleSetCurrent = () => {
    if (!current) {
      setCurrentTrack(id)
    }
  }
  const handleRemove = () => {
    removeTrack(id, current)
  }
  return (
    <div
      className={`playlist-track${current ? '--current' : ''} izi-xs`}
    >
      <button
        className='playlist-track__button izi-yl izi-fill-width izi-padding'
        onClick={handleSetCurrent}
      >
        <label className='playlist-track__title'>
          {title}
        </label>
        <small className='playlist-track__artist-name'>
          {artist}
        </small>
      </button>
      <div
        className='playlist-track__remove izi-middle'
        onClick={handleRemove}
      >
        <MdClose />
      </div>
      <style jsx>{`
.playlist-track {
  border-left: 2px solid #f2f2f2;
}
.playlist-track--current {
  border-left: 2px solid green;
}
.playlist-track__button {
  background: none;
  border: none;
  outline: none;
  text-align: left;
}
.playlist-track__button:focus {
  color: orange;
}
.playlist-track__artist-name {
  color: darkgray;
  margin-top: 0.5em;
}
.playlist-track:not(:hover) .playlist-track__remove,
.playlist-track--current:not(:hover) .playlist-track__remove {
  visibility: hidden;
}

.playlist-track__remove {
  flex-shrink: 0;
  padding: 0.5em;
  cursor: pointer;
}
.playlist-track__remove:hover {
  flex-shrink: 0;
  background: rgb(190,190,190);
}
      `}</style>
    </div>
  )
}

export default PlaylistTrack
