import React from 'react'
import AlbumsFeed from './AlbumsFeed'
import Rxdb from './_/Rxdb'

const NoAlbumsFound = () => (
  <div className='izi--gap izi-y izi-center izi-fill'>
    <h4 className='izi-gray izi-uppercase'>no albums yet</h4>
    <p className='izi-text-center'>Albums will appear gradually, as they are discovered. Also you can add your own albums to the feed, which will makes them available to other members of the network too.</p>
  </div>
)

const AlbumsFound = ({ data, error }) => {
  if (error) {
    return <h1>{error.message}</h1>
  }
  if (!data || data.length === 0) {
    return <NoAlbumsFound />
  }
  return <AlbumsFeed albums={data} />
}

const Wrapper = (props) => {
  // return <AlbumsFound data={fakeAlbumsData} />
  return <Rxdb collection='albums' reactive view={AlbumsFound} />
}

export default Wrapper
