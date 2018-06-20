import React from 'react'
import propTypes from 'prop-types'

import { E2E_DISCOVER_FEED_ID } from '~data/e2eConstants'

import AlbumConnected from './AlbumsFeed/AlbumConnected'

const handleAlbumsMap = (album) => <AlbumConnected {...album} key={album.albumCid} />

const AlbumsFeed = ({ albums }) => (
  <div id={E2E_DISCOVER_FEED_ID} className='albums-page__feed'>
    {
      albums.map(handleAlbumsMap)
    }
  </div>
)

AlbumsFeed.propTypes = {
  albums: propTypes.array.isRequired
}

export default AlbumsFeed
