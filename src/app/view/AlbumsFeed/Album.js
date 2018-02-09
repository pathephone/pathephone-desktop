import React from 'react'
import MdPlay from 'react-icons/lib/md/play-arrow'
import MdAdd from 'react-icons/lib/md/playlist-add'
import SyncIcon from '#/SyncIcon'
import DiskIcon from '#/DiskIcon'
import ImageContainer from '#/ImageContainer'
import GetIpfsImage from '#/GetIpfsImage'
import getQualityLabel from '~/utils/getQualityLabel'

import './Album.css'

const CoverView = ({ data, error }) => {
  if (data) {
    return <ImageContainer className='izi-fill izi-rounded' image={data} />
  }
  if (error) {
    return <DiskIcon />
  }
  return <SyncIcon />
}

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
    return (
      <div className={`album${isSelected ? '--selected' : ''}`}>
        <div className='izi-relative'>
          <button
            onClick={onSelect}
            className='album__cover izi-rounded'
          >
            <GetIpfsImage
              hash={cover}
              view={CoverView}
            />
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
