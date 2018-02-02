import React from 'react'
import MdPlay from 'react-icons/lib/md/play-arrow'
import MdAdd from 'react-icons/lib/md/playlist-add'
import SyncIcon from '#/SyncIcon'
import DiskIcon from '#/DiskIcon'
import ImageContainer from '#/ImageContainer'
import GetIpfsImage from '#/GetIpfsImage'

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

class Album extends React.Component {
  render () {
    const { data, onSelect, onAdd, onPlay, selected, cid } = this.props
    const { title, artist, cover } = data
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
          {
            selected.length === 0 && (
              <div className='album__actions izi-x izi-absolute'>
                <button
                  className='album__actions-button'
                  onClick={onAdd}
                >
                  <MdAdd />
                </button>
                <button
                  className='album__actions-button'
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
