import React from 'react'
import MdClose from 'react-icons/lib/md/close'
import setCurrentTrack from './setCurrentTrack'
import removeTrack from './removeTrack'

import './PlaylistTrack.css'

const PlaylistTrack = ({ title, artist, current, id, contrast }) => {
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
      className={
        `playlist-track ${contrast ? 'playlist-track__contrast' : ''} izi-xs`
      }
    >
      <button
        className={`playlist-track__button ${current ? 'playlist-track__current' : ''} izi-x izi-fill-width izi-padding`}
        onClick={handleSetCurrent}
      >
        <div className='playlist-track__info izi-yl'>
          <label className='playlist-track__title'>
            {title}
          </label>
          <small className='playlist-track__artist-name'>
            {artist}
          </small>
        </div>
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
