import { connect } from 'react-redux'

import {
  getFeedSearchValue,
  getFeedAlbums,
  isFeedHasAlbums,
  isFeedAlbumsSelected,
  getFeedSelectedCount
} from '#selectors'

import DiscoverPage from './DiscoverPage.jsx'
import { uiAlbumsSearchPerformed, uiAlbumsSearchCleared } from '#actions-ui'

const mapStateToProps = (...args) => {
  const selectedAlbumsCount = getFeedSelectedCount(...args)
  return {
    albums: getFeedAlbums(...args),
    hasAlbumsFeed: isFeedHasAlbums(...args),
    hasSelectedBar: selectedAlbumsCount > 0,
    hasNoSearchResultsMessage: !!getFeedSearchValue(...args) && !isFeedHasAlbums(...args),
    searchValue: getFeedSearchValue(...args),
    selectedAlbumsCount,
  }
}

const mapDispatchToProps = {
  onSearchValueChange: uiAlbumsSearchPerformed,
  onCancelSearch: uiAlbumsSearchCleared
  onPlaySelected: 
}

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverPage)
