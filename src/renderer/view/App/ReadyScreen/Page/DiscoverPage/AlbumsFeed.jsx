import React from 'react'
import propTypes from 'prop-types'

import AlbumConnected from './AlbumsFeed/AlbumConnected'

const handleAlbumsMap = (album) => <AlbumConnected {...album} key={album.albumCid} />

const AlbumsFeed = ({ albums }) => (
  <div id='albums-feed' key='feed' className='albums-page__feed'>
    {
      albums.map(handleAlbumsMap)
    }
  </div>
)

AlbumsFeed.propTypes = {
  albums: propTypes.array.isRequired
}

export default AlbumsFeed
