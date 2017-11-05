import React from 'react'
import Album from './AlbumsFeed/Album'

const AlbumsFeed = ({ albums }) => {
  return (
    <div className='albums-feed izi-xu izi-wrap izi-center'>
      {
        albums.map(Album)
      }
    </div>
  )
}

export default AlbumsFeed
