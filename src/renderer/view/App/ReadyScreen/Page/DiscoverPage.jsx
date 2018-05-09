import React from 'react'
import propTypes from 'prop-types'

import SearchBar from './DiscoverPage/SearchBar.jsx'
import AlbumsFeed from './DiscoverPage/AlbumsFeed.jsx'
import NoAlbumsFound from './DiscoverPage/NoAlbumsFound.jsx'
import NoSearchResults from './DiscoverPage/NoSearchResults.jsx'
import SelectedActions from './DiscoverPage/SelectedActions.jsx'

import './DiscoverPage.css'

const DiscoverPage = ({
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

DiscoverPage.propTypes = {
  hasAlbumsFeed: propTypes.bool.isRequired,
  hasSelectedBar: propTypes.bool.isRequired,
  hasNoSearchResultsMessage: propTypes.bool.isRequired
}

export default DiscoverPage
