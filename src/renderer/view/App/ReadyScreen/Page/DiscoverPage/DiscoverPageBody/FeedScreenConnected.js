import { connect } from 'react-redux';

import { systemDiscoverAlbumsFetch } from '~actions/system';
import {
  LOCAL_LATEST_ALBUMS,
  LOCAL_SEARCH_RESULTS_FOR,
} from '~data/i18nConstants';

import {
  getDiscoverAlbumsIds,
  getDiscoverSearchValue,
  isDiscoverAlbumsOutdated,
} from '#selectors';

import FeedScreen from './FeedScreen';

const mapStateToProps = (state) => {
  const searchValue = getDiscoverSearchValue(state);
  let title;
  if (searchValue) {
    title = `${LOCAL_SEARCH_RESULTS_FOR} "${searchValue}"`;
  } else {
    title = LOCAL_LATEST_ALBUMS;
  }
  return {
    albumsIds: getDiscoverAlbumsIds(state),
    hasRefreshButton: !searchValue && isDiscoverAlbumsOutdated(state),
    title,
  };
};

const mapDispatchToProps = {
  onRefreshButtonClick: systemDiscoverAlbumsFetch,
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedScreen);
