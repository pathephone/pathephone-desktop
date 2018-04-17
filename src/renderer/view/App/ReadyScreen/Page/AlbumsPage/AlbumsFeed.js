import React from 'react'
import propTypes from 'prop-types'

import Album from './AlbumsFeed/Album'

class AlbumsFeed extends React.Component {
  AlbumWrapper = (data) => {
    const { cid } = data
    const onAdd = () => {
      addAlbums([cid])
    }
    const onPlay = () => {
      playAlbums([cid])
    }
    const onSelect = () => {
      this.selectAlbums([cid])
    }
    const props = {
      ...data,
      selected,
      onAdd,
      onPlay,
      onSelect
    }
    return (
      <Album {...props} key={cid} />
    )
  }
  render () {
    const { albums } = this.props
    return (
      <div id='albums-feed' key='feed' className='albums-page__feed'>
        {
          albums.map(this.AlbumWrapper)
        }
      </div>
    )
  }
}

AlbumsFeed.propTypes = {
  albums: propTypes.array.isRequired
}

export default AlbumsFeed
