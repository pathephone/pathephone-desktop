import React from 'react'
import AlbumsFeed from './AlbumsFeed'
import Rxdb from './_/Rxdb'
import fakeAlbumsData from './AlbumsFeed/fakeAlbumsData'

const AlbumsFound = ({ data, error }) => {
  if (error) {
    return <h1>{error.message}</h1>
  }
  if (!data || data.length === 0) {
    return (
      <h1>No albums found yet</h1>
    )
  }
  return <AlbumsFeed albums={data} />
}

const Wrapper = (props) => {
  // return <AlbumsFound data={fakeAlbumsData} />
  return <Rxdb collection='albums' reactive view={AlbumsFound} />
}

export default Wrapper
