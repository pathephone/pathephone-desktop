import React from 'react'
import propTypes from 'prop-types'
import MdPlay from 'react-icons/lib/md/play-arrow'
import MdAdd from 'react-icons/lib/md/playlist-add'
import MdAlbum from 'react-icons/lib/md/album'

import {
  E2E_DISCOVER_ALBUM_QUEUE_BUTTON,
  E2E_DISCOVER_ALBUM_PLAY_BUTTON,
  E2E_DISCOVER_ALBUM_TITLE,
  E2E_DISCOVER_ALBUM_ARTIST
} from '~data/e2eConstants'

import './Album.css'

class Album extends React.Component {
  handleAlbumClick = () => {
    const {
      onToggleSelect,
      albumId
    } = this.props
    onToggleSelect(albumId)
  }
  handleQueueAlbumClick = () => {
    const {
      onAddAlbumToPlaylist,
      albumCid
    } = this.props
    onAddAlbumToPlaylist(albumCid)
  }
  handlePlayAlbumClick = () => {
    const {
      onPlayAlbum,
      albumCid
    } = this.props
    onPlayAlbum(albumCid)
  }
  render () {
    const {
      hasSelectedView,
      albumTitle,
      albumArtist,
      albumCoverURL,
      isCoverCached
    } = this.props

    return (
      <div className={`album${hasSelectedView ? '--selected' : ''}`}>
        <div className='album__cover-actions'>
          <button
            onClick={this.handleAlbumClick}
            className='album__cover'
          >
            {
              isCoverCached ? (
                <img
                  className='album__cover-image'
                  src={albumCoverURL}
                  onLoad={this.handleImageLoad}
                />
              ) : (
                <MdAlbum
                  className='album__no-cover-icon'
                />
              )
            }
          </button>
          {
            !hasSelectedView && (
              <div className='album__actions'>
                <button
                  data-e2e={E2E_DISCOVER_ALBUM_QUEUE_BUTTON}
                  className='album__actions-button round-button'
                  onClick={this.handleQueueAlbumClick}
                >
                  <MdAdd />
                </button>
                <button
                  data-e2e={E2E_DISCOVER_ALBUM_PLAY_BUTTON}
                  className='album__actions-button round-button'
                  onClick={this.handlePlayAlbumClick}
                >
                  <MdPlay />
                </button>
              </div>
            )
          }
        </div>
        <h4
          className='album__title'
          data-e2e={E2E_DISCOVER_ALBUM_TITLE}
        >
          {albumTitle}
        </h4>
        <h5
          className='album__artist'
          data-e2e={E2E_DISCOVER_ALBUM_ARTIST}
        >
          {albumArtist}
        </h5>
      </div>
    )
  }
}

Album.propTypes = {
  onToggleSelect: propTypes.func.isRequired,
  onAddAlbumToPlaylist: propTypes.func.isRequired,
  onPlayAlbum: propTypes.func.isRequired,
  hasSelectedView: propTypes.bool.isRequired,
  albumId: propTypes.number.isRequired,
  albumCid: propTypes.string.isRequired,
  albumArtist: propTypes.string.isRequired,
  albumTitle: propTypes.string.isRequired,
  albumCoverURL: propTypes.string.isRequired,
  isCoverCached: propTypes.bool.isRequired
}

export default Album
