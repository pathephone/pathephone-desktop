import React from 'react'
import MdPlay from 'react-icons/lib/md/play-arrow'
import MdAdd from 'react-icons/lib/md/add'
import SyncIcon from '@/SyncIcon'
import DiskIcon from '@/DiskIcon'
import ImageContainer from '@/ImageContainer'
import GetIpfsImage from '@/GetIpfsImage'

const CoverView = ({ data, error }) => {
  if (data) {
    return <ImageContainer className='izi-fill' image={data} />
  }
  if (error) {
    return <DiskIcon />
  }
  return <SyncIcon />
}

class Album extends React.Component {
  render () {
    const { data, onPlay, onSelect, onAdd, isSelected } = this.props
    const { title, artist, cover } = data
    return (
      <div className={`album ${isSelected ? 'selected' : ''}`}>
        <div className='izi-relative'>
          <button
            onClick={onSelect}
            className='album_cover'
          >
            <GetIpfsImage
              hash={cover}
              view={CoverView}
            />
          </button>
          <div className='album__controls izi-x izi-absolute'>
            <button
              className='album__controls-button'
              onClick={onAdd}
            >
              <MdAdd />
            </button>
            <button
              className='album__controls-button'
              onClick={onPlay}
            >
              <MdPlay />
            </button>
          </div>
        </div>
        <h4 className='album_title'>{title}</h4>
        <h5 className='album_artist'>{artist}</h5>
        <style jsx>{`
.album_cover {
  height: 12.5em;
  width: 12.5em;
  flex-shrink: 0;
  flex-grow: 0;
  font-size: 1em;
  padding: 0.25em;
  background: none;
  border: 1px solid #d3d3d3;
  border-readius: 2px;
}
.album_cover:focus {
  outline: orange;
}
.album.selected .album_cover {
  border: 2px solid blue;
}
.album_title {
  text-align: center;
  margin: 1em 0 0 0;
}
.album_artist {
  text-align: center;
  margin: 0.5em 0;
  color: darkgray;
}
.album__controls {
  bottom: 0.5em;
  right: 0.5em;
}
.album__controls-button {
  margin: 0.25em;
}
.album:not(:hover) .album__controls-button {
  display: none;
}

      `}</style>
      </div>
    )
  }
}

export default Album
