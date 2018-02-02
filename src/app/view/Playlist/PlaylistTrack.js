import React from 'react'
import MdClose from 'react-icons/lib/md/close'
import setCurrentTrack from './setCurrentTrack'
import removeTrack from './removeTrack'

import './PlaylistTrack.css'

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
    </div>
  )
}

export default PlaylistTrack
