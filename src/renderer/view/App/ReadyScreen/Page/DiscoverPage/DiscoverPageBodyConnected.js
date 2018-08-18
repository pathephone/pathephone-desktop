import { connect } from 'react-redux';

import selectors from '#selectors';
import actions from '#actions';

import DiscoverPageBody from './DiscoverPageBody';

const mapStateToProps = (state) => {
  const hasAlbums = selectors.isDiscoverHasAlbums(state);
  const hasError = selectors.isDiscoverHasFailed(state);
  const isSearchPerformed = selectors.isDiscoverSearchPerformed(state);
  const isProcessing = selectors.isDiscoverPageProcessing(state);
  const isAlbumsOutdated = selectors.isDiscoverAlbumsOutdated(state);
  return {
    hasNoAlbumsScreen: !hasAlbums && !hasError && !isSearchPerformed && !isProcessing,
    hasNoSearchResultsScreen: isSearchPerformed && !isProcessing && !hasError && !hasAlbums,
    hasFeedScreen: hasAlbums,
    hasProcessingScreen: isProcessing,
    isAlbumsUpdateNeeded: isAlbumsOutdated && !hasAlbums,
  };
};

const mapDispatchToProps = {
  onAlbumsUpdateRequest: actions.systemDiscoverAlbumsFetch,
};

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverPageBody);
