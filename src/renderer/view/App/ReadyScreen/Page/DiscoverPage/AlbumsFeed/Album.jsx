import React from 'react'
import propTypes from 'prop-types'
import MdPlay from 'react-icons/lib/md/play-arrow'
import MdAdd from 'react-icons/lib/md/playlist-add'

import { QUALITY_LABEL_LOW, QUALITY_LABEL_HIGH, QUALITY_LABEL_LOSSLESS } from '~data/constants'

import ImageContainer from '~components/ImageContainer.jsx'

import getQualityCode from '~utils/getQualityCode'

import './Album.css'
import { E2E_DISCOVER_ALBUM_QUEUE_BUTTON, E2E_DISCOVER_ALBUM_PLAY_BUTTON } from '~data/e2eConstants'

const getQualityTitleLong = (code) => {
  switch (code) {
    case QUALITY_LABEL_LOSSLESS:
      return 'Lossless'
    case QUALITY_LABEL_HIGH:
      return 'High quality'
    default:
      return 'Low quality'
  }
}

const getQualityTitleShort = (code) => {
  switch (code) {
    case QUALITY_LABEL_LOSSLESS:
      return 'LS'
    case QUALITY_LABEL_HIGH:
      return 'HQ'
    default:
      return 'LQ'
  }
}

const Album = ({
  onToggleSelect,
  onAddAlbumToPlaylist,
  onPlayAlbum,
  hasSelectedView,
  albumCid,
  albumTitle,
  albumArtist,
  lowestQuality,
  albumCoverURL
}) => {
  const handleSelectAlbum = () => {
    onToggleSelect(albumCid)
  }
  const handleAddAlbum = () => {
    onAddAlbumToPlaylist(albumCid)
  }
  const handlePlayAlbum = () => {
    onPlayAlbum(albumCid)
  }
  const qualityCode = getQualityCode(lowestQuality)
  const qualityLabelFullPrefix = getQualityTitleLong(qualityCode)
  const qualityLabelFull = `${qualityLabelFullPrefix} (~${parseInt(lowestQuality)}kbps)`
  const qualityLabelShort = getQualityTitleShort(qualityCode)
  return (
    <div className={`album${hasSelectedView ? '--selected' : ''}`}>
      <div className='izi-relative'>
        <button
          onClick={handleSelectAlbum}
          className='album__cover izi-rounded'
        >
          <ImageContainer className='izi-fill izi-rounded' image={albumCoverURL} />
        </button>
        <div className='album__quality'>
          <div
            className={
              `album__quality-label${
                qualityCode === QUALITY_LABEL_LOW
                  ? '--low'
                  : qualityCode === QUALITY_LABEL_HIGH
                    ? '--high'
                    : '--lossless'
              }`
            }
            title={qualityLabelFull}
          >
            {qualityLabelShort}
          </div>
        </div>
        {
          !hasSelectedView && (
            <div className='album__actions izi-x izi-absolute'>
              <button
                data-e2e={E2E_DISCOVER_ALBUM_QUEUE_BUTTON}
                className='album__actions-button round-button'
                onClick={handleAddAlbum}
              >
                <MdAdd />
              </button>
              <button
                data-e2e={E2E_DISCOVER_ALBUM_PLAY_BUTTON}
                className='album__actions-button round-button'
                onClick={handlePlayAlbum}
              >
                <MdPlay />
              </button>
            </div>
          )
        }
      </div>
      <h4 className='album__title'>{albumTitle}</h4>
      <h5 className='album__artist'>{albumArtist}</h5>
    </div>
  )
}

Album.propTypes = {
  onToggleSelect: propTypes.func.isRequired,
  onAddAlbumToPlaylist: propTypes.func.isRequired,
  onPlayAlbum: propTypes.func.isRequired,
  hasSelectedView: propTypes.bool.isRequired,
  albumCid: propTypes.string.isRequired,
  albumArtist: propTypes.string.isRequired,
  albumTitle: propTypes.string.isRequired,
  albumCoverURL: propTypes.string.isRequired,
  lowestQuality: propTypes.number.isRequired
}

export default Album
