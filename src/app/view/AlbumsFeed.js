import React from 'react'
import Album from './AlbumsFeed/Album'
import playAlbums from '~/scripts/playAlbums'
import deleteAlbums from '~/scripts/deleteAlbums'

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
  AlbumWrapper = (data) => {
    const { cid } = data
    const isSelected = this.state.selected.includes(cid)
    const onPlay = () => {
      if (!isSelected) {
        playAlbums([cid])
      } else {
        playAlbums(this.state.selected)
      }
    }
    const onRemove = () => {
      deleteAlbums(cid)
    }
    const onSelect = () => {
      this.selectAlbum(cid)
    }
    const props = {
      ...data,
      isSelected,
      onPlay,
      onSelect,
      onRemove
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
  grid-template-columns: repeat(auto-fill, 10em) ;
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
