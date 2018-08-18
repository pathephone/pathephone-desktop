import { connect } from 'react-redux';

import actions from '#actions';
import i18n from '~shared/data/i18n';

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
    title = `${i18n.SEARCH_RESULTS_FOR} "${searchValue}"`;
  } else {
    title = i18n.LATEST_ALBUMS;
  }
  return {
    albumsIds: getDiscoverAlbumsIds(state),
    hasRefreshButton: !searchValue && isDiscoverAlbumsOutdated(state),
    title,
  };
};

const mapDispatchToProps = {
  onRefreshButtonClick: actions.systemDiscoverAlbumsFetch,
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedScreen);
