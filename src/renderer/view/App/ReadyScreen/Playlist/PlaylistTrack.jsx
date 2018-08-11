import React from 'react'
import propTypes from 'prop-types'

import MdClose from 'react-icons/lib/md/close'
import MdGet from 'react-icons/lib/md/file-download'

import './PlaylistTrack.css'

class PlaylistTrack extends React.Component {
  handlePlayClick = () => {
    this.props.onPlayClick()
  }
  handleRemoveClick = () => {
    this.props.onRemoveClick()
  }
  render () {
    const {
      title, artist, isCurrent, isDownloaded, order
    } = this.props
    return (
      <div
        className={
          `playlist-track ${isDownloaded ? '' : 'playlist-track--downloading'}`
        }
        style={{ order }}
      >
        <button
          className={`playlist-track__button ${isCurrent ? 'playlist-track__current' : ''}`}
          disabled={isCurrent}
          onClick={this.handlePlayClick}
        >
          <span className='playlist-track__title'>
            {
              !isDownloaded && (
                <MdGet className='playlist-track__download-icon animated flash infinite' />
              )
            }
            {title}
          </span>
          <br />
          <small className='playlist-track__artist-name'>
            {artist}
          </small>
        </button>
        <div
          className='playlist-track__remove round-button'
          onClick={this.handleRemoveClick}
        >
          <MdClose />
        </div>
      </div>
    )
  }
}

PlaylistTrack.propTypes = {
  title: propTypes.string.isRequired,
  artist: propTypes.string.isRequired,
  order: propTypes.string.isRequired,
  onRemoveClick: propTypes.func.isRequired,
  onPlayClick: propTypes.func.isRequired,
  isCurrent: propTypes.bool.isRequired,
  isDownloaded: propTypes.bool.isRequired
}

export default PlaylistTrack
