import { connect } from 'react-redux';

import selectors from '#selectors';
import actions from '#actions';

import DiscoverPage from './DiscoverPage';

const mapStateToProps = (state) => {
  const isSelected = selectors.isDiscoverSelected(state);
  return {
    hasSelectedActions: isSelected,
    hasSearchBar: selectors.getAlbumsCount(state) > 0,
  };
};

const mapDispatchToProps = {
  onWillMount: actions.systemDiscoverAlbumsFetch,
  onWillUnmount: actions.uiDiscoverPageClosed,
};

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverPage);
