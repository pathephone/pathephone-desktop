import React from 'react'
import propTypes from 'prop-types'

import SearchBar from './AlbumsPage/SearchBar.jsx'
import AlbumsFeed from './AlbumsPage/AlbumsFeed.jsx'
import NoAlbumsFound from './AlbumsPage/NoAlbumsFound.jsx'
import NoSearchResults from './AlbumsPage/NoSearchResults.jsx'
import SelectedActions from './AlbumsPage/SelectedActions.jsx'

import './AlbumsPage.css'

const AlbumsPage = ({
  hasAlbumsFeed,
  hasSelectedBar,
  hasNoSearchResultsMessage,
  ...restProps
}) => (
  <div className='albums-page'>
    <SearchBar
      {...restProps}
    />
    {
      hasAlbumsFeed ? (
        <AlbumsFeed {...restProps} />
      ) : hasNoSearchResultsMessage ? (
        <NoSearchResults />
      ) : (
        <NoAlbumsFound />
      )
    }
    {
      hasSelectedBar > 0 && (
        <SelectedActions
          {...restProps}
        />
      )
    }
  </div>
)

AlbumsPage.propTypes = {
  hasAlbumsFeed: propTypes.bool.isRequired,
  hasSelectedBar: propTypes.bool.isRequired,
  hasNoSearchResultsMessage: propTypes.bool.isRequired
}

export default AlbumsPage
