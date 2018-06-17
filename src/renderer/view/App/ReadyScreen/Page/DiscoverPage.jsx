import React from 'react'
import propTypes from 'prop-types'

import { E2E_DISCOVER_PAGE_ID } from '~data/e2eConstants'

import PageContainer from '~components/PageContainer.jsx'

import SearchBar from './DiscoverPage/SearchBar.jsx'
import AlbumsFeedConnected from './DiscoverPage/AlbumsFeedConnected'
import NoAlbumsFound from './DiscoverPage/NoAlbumsFound.jsx'
import NoSearchResults from './DiscoverPage/NoSearchResults.jsx'
import SelectedActions from './DiscoverPage/SelectedActions.jsx'

import './DiscoverPage.css'

class DiscoverPage extends React.Component {
  render () {
    const {
      hasAlbumsFeed,
      hasSelectedBar,
      hasNoSearchResultsMessage,
      ...restProps
    } = this.props
    return (
      <PageContainer
        id={E2E_DISCOVER_PAGE_ID}
        className='albums-page'
      >
        <SearchBar
          {...restProps}
        />
        {
          hasAlbumsFeed ? (
            <AlbumsFeedConnected />
          ) : hasNoSearchResultsMessage ? (
            <NoSearchResults />
          ) : (
            <NoAlbumsFound />
          )
        }
        {
          hasSelectedBar && (
            <SelectedActions
              {...restProps}
            />
          )
        }
      </PageContainer>
    )
  }
}

DiscoverPage.propTypes = {
  hasAlbumsFeed: propTypes.bool.isRequired,
  hasSelectedBar: propTypes.bool.isRequired,
  hasNoSearchResultsMessage: propTypes.bool.isRequired
}

export default DiscoverPage
