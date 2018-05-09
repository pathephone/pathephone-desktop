import { connect } from 'react-redux'

import {
  getFeedSearchValue,
  getFeedAlbums,
  isFeedHasAlbums,
  isFeedAlbumsSelected
} from '#selectors'

import DiscoverPage from './DiscoverPage.jsx'
import { uiAlbumsSearchPerformed, uiAlbumsSearchCleared } from '#actions-ui'

const mapStateToProps = (...args) => ({
  albums: getFeedAlbums(...args),
  hasAlbumsFeed: isFeedHasAlbums(...args),
  hasSelectedBar: isFeedAlbumsSelected(...args),
  hasNoSearchResultsMessage: !!getFeedSearchValue(...args) && !isFeedHasAlbums(...args),
  searchValue: getFeedSearchValue(...args)
})

const mapDispatchToProps = {
  onSearchValueChange: uiAlbumsSearchPerformed,
  onCancelSearch: uiAlbumsSearchCleared
}

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverPage)
