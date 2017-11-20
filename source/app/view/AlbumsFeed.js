import React from 'react'
import Album from './AlbumsFeed/Album'

const AlbumsFeed = ({ albums }) => {
  return (
    <div className='albums-feed'>
      {
        albums.map(Album)
      }
    </div>
  )
}

export default AlbumsFeed
