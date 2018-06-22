import { connect } from 'react-redux'

import {
  isDiscoverSearchPerformed,
  isDiscoverHasAlbums,
  isDiscoverPageProcessing,
  isDiscoverHasFailed
} from '#selectors'

import { uiDiscoverPageOpened, uiDiscoverPageClosed } from '~actions/ui'

import DiscoverPageBody from './DiscoverPageBody.jsx'

const mapStateToProps = state => {
  const hasAlbums = isDiscoverHasAlbums(state)
  const hasError = isDiscoverHasFailed(state)
  const isSearchPerformed = isDiscoverSearchPerformed(state)
  const isProcessing = isDiscoverPageProcessing(state)
  return {
    hasNoAlbumsScreen: !hasAlbums && !hasError && !isSearchPerformed && !isProcessing,
    hasNoSearchResultsScreen: isSearchPerformed && !isProcessing && !hasError && !hasAlbums,
    hasFeedScreen: hasAlbums,
    hasProcessingScreen: isProcessing
  }
}

const mapDispatchToProps = {
  onWillMount: uiDiscoverPageOpened,
  onWillUnmount: uiDiscoverPageClosed
}

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverPageBody)
