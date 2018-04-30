import React from 'react'
import MdPlay from 'react-icons/lib/md/play-arrow'
import MdAdd from 'react-icons/lib/md/playlist-add'

import ImageContainer from '~components/ImageContainer.jsx'

import getQualityLabel from '~utils/getQualityLabel'
import withIpfsGateway from '~utils/withIpfsGateway'

import './Album.css'

const getLowestQuality = tracks => {
  const bitrates = tracks.map(({bitrate}) => bitrate)
  const handleSort = (a, b) => a > b
  const [ lowest ] = bitrates.sort(handleSort)
  return lowest
}

class Album extends React.Component {
  render () {
    const { data, onSelect, onAdd, onPlay, selected, cid } = this.props
    const { title, artist, cover, tracks } = data
    const lowestQuality = getLowestQuality(tracks)
    const qualityLabel = getQualityLabel(lowestQuality)
    const isSelected = selected.includes(cid)
    const coverURL = withIpfsGateway(cover)
    return (
      <div className={`album${isSelected ? '--selected' : ''}`}>
        <div className='izi-relative'>
          <button
            onClick={onSelect}
            className='album__cover izi-rounded'
          >
            <ImageContainer className='izi-fill izi-rounded' image={coverURL} />
          </button>
          <div className='album__quality'>
            <div
              className={
                `album__quality-label${
                  qualityLabel === 'LQ'
                    ? '--low'
                    : qualityLabel === 'HQ'
                      ? '--high'
                      : '--lossless'
                }`
              }
              title={
                (qualityLabel === 'LQ'
                  ? 'Low quality'
                  : qualityLabel === 'HQ'
                    ? 'High quality'
                    : 'Lossless') +
                  ` (~${parseInt(lowestQuality)}kbps)`
              }
            >
              {qualityLabel}
            </div>
          </div>
          {
            selected.length === 0 && (
              <div className='album__actions izi-x izi-absolute'>
                <button
                  className='album__actions-button round-button'
                  onClick={onAdd}
                >
                  <MdAdd />
                </button>
                <button
                  className='album__actions-button round-button'
                  onClick={onPlay}
                >
                  <MdPlay />
                </button>
              </div>
            )
          }
        </div>
        <h4 className='album__title'>{title}</h4>
        <h5 className='album__artist'>{artist}</h5>
      </div>
    )
  }
}

export default Album
