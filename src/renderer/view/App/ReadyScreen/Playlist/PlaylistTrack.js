import React from 'react'
import MdClose from 'react-icons/lib/md/close'
import MdGet from 'react-icons/lib/md/file-download'
import setCurrentTrack from './setCurrentTrack'
import removeTrack from './removeTrack'

import './PlaylistTrack.css'

const PlaylistTrack = ({ title, artist, current, id, contrast, downloaded }) => {
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
        `playlist-track ${downloaded ? '' : 'playlist-track--downloading'} izi-x`
      }
    >
      <button
        className={`playlist-track__button ${current ? 'playlist-track__current' : ''} izi-x izi-fill-width izi-padding`}
        onClick={handleSetCurrent}
      >
        <div className='playlist-track__info izi-yl'>
          <span className='playlist-track__title'>
            {
              !downloaded && (
                <MdGet className='playlist-track__download-icon animated flash infinite' />
              )
            }
            {title}
          </span>
          <small className='playlist-track__artist-name'>
            {artist}
          </small>
        </div>
      </button>
      <div
        className='playlist-track__remove round-button'
        onClick={handleRemove}
      >
        <MdClose />
      </div>
    </div>
  )
}

export default PlaylistTrack
