import React from 'react'
import propTypes from 'prop-types'

import MdClose from 'react-icons/lib/md/close'
import MdGet from 'react-icons/lib/md/file-download'

import './PlaylistTrack.css'

const PlaylistTrack = ({
  id, title, artist, isCurrent, isDownloaded, onRemove, onPlay
}) => {
  const handlePlayClick = () => { onPlay(id) }
  const handleRemoveClick = () => { onRemove(id) }
  return (
    <div
      className={
        `playlist-track ${isDownloaded ? '' : 'playlist-track--downloading'} izi-x`
      }
    >
      <button
        className={`playlist-track__button ${isCurrent ? 'playlist-track__current' : ''} izi-x izi-fill-width izi-padding`}
        disabled={isCurrent}
        onClick={handlePlayClick}
      >
        <div className='playlist-track__info izi-yl'>
          <span className='playlist-track__title'>
            {
              !isDownloaded && (
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
        onClick={handleRemoveClick}
      >
        <MdClose />
      </div>
    </div>
  )
}

PlaylistTrack.propTypes = {
  id: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  artist: propTypes.string.isRequired,
  onRemove: propTypes.func.isRequired,
  onPlay: propTypes.func.isRequired,
  isCurrent: propTypes.bool.isRequired,
  isDownloaded: propTypes.bool.isRequired
}

export default PlaylistTrack
