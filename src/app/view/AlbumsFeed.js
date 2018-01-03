import React from 'react'
import Album from './AlbumsFeed/Album'

import addAlbums from './AlbumsFeed/addAlbums'
import playAlbums from './AlbumsFeed/playAlbums'
import deleteAlbums from './AlbumsFeed/deleteAlbums'

class AlbumsFeed extends React.Component {
  state = {
    selected: []
  }
  selectAlbum = (cid) => {
    const { selected } = this.state
    const index = selected.findIndex(
      scid => scid === cid
    )
    if (index > -1) {
      selected.splice(index, 1)
    } else {
      selected.push(cid)
    }
    this.setState({ selected })
  }
  clearSelected = () => {
    this.setState({
      selected: []
    })
  }
  AlbumWrapper = (data) => {
    const { selected } = this.state
    const { cid } = data
    const isSelected = selected.includes(cid)
    const onAdd = () => {
      if (!isSelected) {
        addAlbums([cid])
      } else {
        addAlbums(this.state.selected)
      }
    }
    const onPlay = () => {
      if (!isSelected) {
        playAlbums([cid])
      } else {
        playAlbums(this.state.selected)
      }
    }
    const onDelete = () => {
      if (!isSelected) {
        deleteAlbums([cid])
      } else {
        deleteAlbums(this.state.selected)
      }
    }
    const onSelect = () => {
      this.selectAlbum(cid)
    }
    const props = {
      ...data,
      isSelected,
      onAdd,
      onPlay,
      onSelect,
      onDelete
    }
    return (
      <Album {...props} key={cid} />
    )
  }
  render () {
    const { albums } = this.props
    return (
      <div className='albums-feed'>
        {
          albums.map(this.AlbumWrapper)
        }
        <style jsx>{`
.albums-feed {
  display: grid;
  grid-template-columns: repeat(auto-fill, 12.5em) ;
  justify-content: space-around;
  align-content: flex-start;
  grid-gap: 1em;
  padding: 1em;
  overflow-y: auto;
}
      `}</style>
      </div>
    )
  }
}

export default AlbumsFeed
