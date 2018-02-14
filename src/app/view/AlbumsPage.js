import React from 'react'
import SearchBar from './AlbumsPage/SearchBar'
import AlbumsFeed from './AlbumsPage/AlbumsFeed'
import Rxdb from '#/Rxdb'

import './AlbumsPage/AlbumsPage.css'

const NoAlbumsFound = () => (
  <div className='albums-page__no-albums'>
    <h4 className='izi-gray izi-uppercase'>no albums yet</h4>
    <p className='izi-text-center'>Albums will appear gradually, as they are discovered. Also you can add your own albums to the feed, which will makes them available to other members of the network too.</p>
  </div>
)

const createAlbumsQuery = (searchText) => {
  if (searchText) {
    const expression = new RegExp(searchText, 'i')
    const orQuery = [
      {
        'data.artist': {
          $regex: expression
        }
      },
      {
        'data.title': {
          $regex: expression
        }
      }
    ]
    return {
      $or: orQuery
    }
  }
}

class Wrapper extends React.Component {
  state = {
    searchText: ''
  }
  handleSearch = (searchText) => {
    this.setState({ searchText })
  }
  ResolveAlbums = ({ data, error }) => {
    if (error) {
      return <h1>{error.message}</h1>
    }
    if ((!data || data.length === 0) && !this.state.searchText) {
      return <NoAlbumsFound />
    }
    return <AlbumsFeed albums={data} onSearch={this.handleSearch} />
  }
  render () {
    const { searchText } = this.state
    const query = createAlbumsQuery(searchText)
    return (
      <div className='albums-page'>
        <SearchBar onChange={this.handleSearch} />
        <Rxdb collection='albums' query={query} reactive view={this.ResolveAlbums} />
      </div>
    )
  }
}

export default Wrapper
