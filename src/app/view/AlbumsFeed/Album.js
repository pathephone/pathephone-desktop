import React from 'react'
import MdPlay from 'react-icons/lib/md/play-arrow'
import MdAdd from 'react-icons/lib/md/add'
import SyncIcon from '@/SyncIcon'
import DiskIcon from '@/DiskIcon'
import ImageContainer from '@/ImageContainer'
import GetIpfsImage from '@/GetIpfsImage'

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
    const { data, onPlay, onSelect, onAdd, isSelected } = this.props
    const { title, artist, cover } = data
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
        <h4 className='album__title'>{title}</h4>
        <h5 className='album__artist'>{artist}</h5>
        <style jsx>{`
.album__cover {
  height: 12.5em;
  width: 12.5em;
  flex-shrink: 0;
  flex-grow: 0;
  font-size: 1em;
  padding: 0.25em;
  background: none;
  border: 1px solid #d3d3d3;
  outline: none;
}
.album__cover:focus {
  border: 1.5px solid dodgerblue;
}
.album--selected .album__cover {
  background-color: orange;
}
.album__title {
  text-align: center;
  margin: 1em 0 0 0;
}
.album__artist {
  text-align: center;
  margin: 0.5em 0;
  color: darkgray;
}
.album__controls {
  bottom: 0.5em;
  right: 0.5em;
}
.album:not(:hover) .album__controls,
.album--selected:not(:hover) .album__controls {
  display: none;
}
.album__controls-button {
  margin: 0.25em;
}
      `}</style>
      </div>
    )
  }
}

export default Album
