import React from 'react'
import propTypes from 'prop-types'

import SearchBar from './AlbumsPage/SearchBar'
import AlbumsFeed from './AlbumsPage/AlbumsFeed'
import NoAlbumsFound from './AlbumsPage/NoAlbumsFound'
import SelectedActions from './AlbumsPage/SelectedActions'

import './AlbumsPage/AlbumsPage.css'

class AlbumsPage extends React.Component {
  onPlaySelectedAlbums () {
    const { selectedCids, onPlayAlbums } = this.props
    onPlayAlbums(selectedCids)
  }
  onAddSelectedAlbumsToPlaylist () {
    const { selectedCids, onAddAlbumsToPlaylist } = this.props
    onAddAlbumsToPlaylist(selectedCids)
  }
  onDeleteSelectedAlbums () {
    const { selectedCids, onDeleteAlbums } = this.props
    onDeleteAlbums(selectedCids)
  }
  onSearchInputChange (e) {
    const { onChangeSearchValue } = this.props
    onChangeSearchValue(e.currentTarget.value)
  }
  render () {
    const {
      albums,
      searchValue,
      onCancelAlbumsPageSearch,
      onCancelAlbumsPageSelection,
      onChangeSearchValue,
      isNothingFound,
      selectedNum
    } = this.props
    return (
      <div className='albums-page'>
        <SearchBar
          value={searchValue}
          onCancel={onCancelAlbumsPageSearch}
          onChange={onChangeSearchValue}
        />
        {
          isNothingFound ? (
            <NoAlbumsFound />
          ) : (
            <AlbumsFeed albums={albums} />
          )
        }
        {
          selectedNum > 0 && (
            <SelectedActions
              selectedNum={selectedNum}
              onPlay={this.onPlaySelectedAlbums}
              onAdd={this.onAddSelectedAlbumsToPlaylist}
              onCancel={onCancelAlbumsPageSelection}
              onDelete={this.onDeleteSeleAlbums}
            />
          )
        }
      </div>
    )
  }
}

AlbumsPage.propTypes = {
  albums: propTypes.array.isRequired,
  searchValue: propTypes.string.isRequired,
  onChangeSearchValue: propTypes.func.isRequired,
  onCancelAlbumsPageSearch: propTypes.func.isRequired,
  onCancelAlbumsPageSelection: propTypes.func.isRequired,
  selectedNum: propTypes.number.isRequired,
  isNothingFound: propTypes.bool.isRequired
}

export default AlbumsPage
