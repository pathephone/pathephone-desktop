import { connect } from 'react-redux'

import {
  getDiscoverSearchValue,
  getSelectedFeedAlbumsCount,
  isFeedHasAlbums,
  isFeedAlbumsSelected,
  getDiscoverSelectedAlbums
} from '#selectors'

import DiscoverPage from './DiscoverPage.jsx'
import {
  uiDiscoverSearchPerformed,
  uiDiscoverSearchCleared,
  uiDiscoverSelectedCanceled,
  uiDiscoverSelectedDeleted,
  uiDiscoverSelectedQueued,
  uiDiscoverSelectedPlayed
} from '#actions-ui'

const mapStateToProps = state => {
  const searchValue = getDiscoverSearchValue(state)
  const hasAlbumsFeed = isFeedHasAlbums(state)
  return {
    searchValue,
    selectedAlbumsCount: getSelectedFeedAlbumsCount(state),
    selectedAlbumsIds: getDiscoverSelectedAlbums(state),

    hasAlbumsFeed,
    hasSelectedBar: isFeedAlbumsSelected(state),
    hasNoSearchResultsMessage: !!searchValue && !hasAlbumsFeed
  }
}

const mapDispatchToProps = {
  onSearchValueChange: uiDiscoverSearchPerformed,
  onCancelSearch: uiDiscoverSearchCleared,
  onCancelSelection: uiDiscoverSelectedCanceled,
  onPlaySelected: uiDiscoverSelectedPlayed,
  onAddSelected: uiDiscoverSelectedQueued,
  onDeleteSelected: uiDiscoverSelectedDeleted
}

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverPage)
