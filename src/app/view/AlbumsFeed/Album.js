import React from 'react'
import MdPlay from 'react-icons/lib/md/play-arrow'
import MdAdd from 'react-icons/lib/md/playlist-add'
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
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}
.album__cover:focus {
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}
.album--selected .album__cover {
  background-color: dodgerblue;
  border-color: dodgerblue;
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
.album__actions {
  bottom: 0.5em;
  right: 0.5em;
}
.album:not(:hover) .album__actions,
.album--selected:not(:hover) .album__actions {
  display: none;
}
.album__actions-button {
  margin: 0.25em;
}
      `}</style>
      </div>
    )
  }
}

export default Album
