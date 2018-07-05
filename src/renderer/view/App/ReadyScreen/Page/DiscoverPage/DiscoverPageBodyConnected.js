import { connect } from 'react-redux'

import {
  isDiscoverSearchPerformed,
  isDiscoverHasAlbums,
  isDiscoverPageProcessing,
  isDiscoverHasFailed,
  isDiscoverAlbumsOutdated
} from '#selectors'

import DiscoverPageBody from './DiscoverPageBody.jsx'
import { systemDiscoverAlbumsFetch } from '~actions/system'

const mapStateToProps = state => {
  const hasAlbums = isDiscoverHasAlbums(state)
  const hasError = isDiscoverHasFailed(state)
  const isSearchPerformed = isDiscoverSearchPerformed(state)
  const isProcessing = isDiscoverPageProcessing(state)
  const isAlbumsOutdated = isDiscoverAlbumsOutdated(state)
  return {
    hasNoAlbumsScreen: !hasAlbums && !hasError && !isSearchPerformed && !isProcessing,
    hasNoSearchResultsScreen: isSearchPerformed && !isProcessing && !hasError && !hasAlbums,
    hasFeedScreen: hasAlbums,
    hasProcessingScreen: isProcessing,
    isAlbumsUpdateNeeded: isAlbumsOutdated && !hasAlbums
  }
}

const mapDispatchToProps = {
  onAlbumsUpdateRequest: systemDiscoverAlbumsFetch
}

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverPageBody)
