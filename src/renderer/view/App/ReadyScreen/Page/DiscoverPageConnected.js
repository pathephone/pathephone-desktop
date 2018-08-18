import { connect } from 'react-redux';

import {
  isDiscoverSelected, getAlbumsCount,
} from '#selectors';

import actions from '#actions';

import DiscoverPage from './DiscoverPage';

const mapStateToProps = (state) => {
  const isSelected = isDiscoverSelected(state);
  return {
    hasSelectedActions: isSelected,
    hasSearchBar: getAlbumsCount(state) > 0,
  };
};

const mapDispatchToProps = {
  onWillMount: actions.systemDiscoverAlbumsFetch,
  onWillUnmount: actions.uiDiscoverPageClosed,
};

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverPage);
