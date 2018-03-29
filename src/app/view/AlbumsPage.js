import React from 'react'
import SearchBar from './AlbumsPage/SearchBar'
import AlbumsFeed from './AlbumsPage/AlbumsFeed'
import Rxdb from '~components/Rxdb'

import './AlbumsPage/AlbumsPage.css'

const NoAlbumsFound = () => (
  <div className='albums-page__no-albums'>
    <h4 className='izi-gray izi-uppercase'>no albums yet</h4>
    <p className='izi-text-center'>Albums will appear gradually, as they are discovered. Also you can add your own albums to the feed, which will makes them available to other members of the network too.</p>
  </div>
)

const getQueryFields = ($regex) => [
  {
    'data.artist': { $regex }
  },
  {
    'data.title': { $regex }
  }

]

const createAlbumsQuery = (searchText) => {
  if (searchText) {
    const words = searchText.split(' ')
    const handleFilter = s => s
    const pureWords = words.filter(handleFilter)
    if (pureWords.length === 1) {
      const regex = new RegExp(pureWords[0], 'i')
      return {
        $or: getQueryFields(regex)
      }
    } else
    if (pureWords.length > 1) {
      let expression = '('
      const handleEach = (word, index, array) => {
        if (index === array.length - 1) {
          expression = expression.concat(word, ')')
        } else {
          expression = expression.concat(word, '|')
        }
      }
      pureWords.forEach(handleEach)
      const regex = new RegExp(expression, 'i')
      return {
        $and: getQueryFields(regex)
      }
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
  handleCancelSearch = () => {
    this.setState({ searchText: '' })
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
        <SearchBar
          value={this.state.searchText}
          onCancel={this.handleCancelSearch}
          onChange={this.handleSearch}
        />
        <Rxdb collection='albums' query={query} reactive view={this.ResolveAlbums} />
      </div>
    )
  }
}

export default Wrapper
