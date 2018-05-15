import { connect } from 'react-redux'

import {
  getFeedSearchValue,
  getSelectedFeedAlbumsCount,
  isFeedHasAlbums,
  isFeedAlbumsSelected,
  getFeedSelectedAlbums
} from '#selectors'

import DiscoverPage from './DiscoverPage.jsx'
import { uiAlbumsSearchPerformed, uiAlbumsSearchCleared, uiAlbumsPlayed, uiAlbumsAddedToPlaylist, uiFeedSelectionCanceled, uiAlbumsDeleted } from '#actions-ui'

const mapStateToProps = state => {
  const searchValue = getFeedSearchValue(state)
  const hasAlbumsFeed = isFeedHasAlbums(state)
  return {
    searchValue,
    selectedAlbumsCount: getSelectedFeedAlbumsCount(state),
    selectedAlbumsIds: getFeedSelectedAlbums(state),

    hasAlbumsFeed,
    hasSelectedBar: isFeedAlbumsSelected(state),
    hasNoSearchResultsMessage: !!searchValue && !hasAlbumsFeed
  }
}

const mapDispatchToProps = {
  onSearchValueChange: uiAlbumsSearchPerformed,
  onCancelSearch: uiAlbumsSearchCleared,
  onCancelSelection: uiFeedSelectionCanceled,
  onAlbumsPlayed: uiAlbumsPlayed,
  onAlbumsAddedToPlaylist: uiAlbumsAddedToPlaylist,
  onAlbumsDeleted: uiAlbumsDeleted
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const {
    selectedAlbumsIds,
    ...restStateProps
  } = stateProps
  const {
    onAlbumsPlayed,
    onAlbumsAddedToPlaylist,
    onAlbumsDeleted,
    ...restDispatchProps
  } = dispatchProps
  return {
    onPlaySelected () {
      onAlbumsPlayed(selectedAlbumsIds)
    },
    onDeleteSelected () {
      onAlbumsDeleted(selectedAlbumsIds)
    },
    onAddSelected () {
      onAlbumsAddedToPlaylist(selectedAlbumsIds)
    },
    ...restStateProps,
    ...restDispatchProps,
    ...ownProps
  }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(DiscoverPage)
