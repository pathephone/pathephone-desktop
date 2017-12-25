import React from 'react'
import MdPlay from 'react-icons/lib/md/play-arrow'
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
  handleSelectClick = e => {
    if (!this.playButton.contains(e.target)) {
      this.props.onSelect()
    }
  }
  render () {
    const { data, onPlay, isSelected } = this.props
    const { title, artist, cover } = data
    return (
      <div className={`album ${isSelected ? 'selected' : ''}`}>
        <button
          onClick={this.handleSelectClick}
          className='album_cover izi-relative'
        >
          <GetIpfsImage
            hash={cover}
            view={CoverView}
          />
          <button
            ref={c => { this.playButton = c }}
            className='album_play-button izi-absolute'
            onClick={onPlay}
          >
            <MdPlay />
          </button>
        </button>
        <h4 className='album_title'>{title}</h4>
        <h5 className='album_artist'>{artist}</h5>
        <style jsx>{`
.album {
  width: 15em;
}
.album_cover {
  height: 10em;
  width: 10em;
  flex-shrink: 0;
  flex-grow: 0;
  font-size: 1em;
  padding: 0.25em;
  background: none;
  border: 1px solid #d3d3d3;
  border-readius: 2px;
  outline: none;
}
.album_cover:focus {
  outline: orange;
}
.album.selected .album_cover {
  border-color: blue;
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

.album_play-button {
  bottom: 1em;
  right: 1em;
}
.album:not(:hover) .album_play-button {
  display: none;
}

      `}</style>
      </div>
    )
  }
}

export default Album
