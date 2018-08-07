import { connect } from 'react-redux';

import {
  isDiscoverSelected, getAlbumsCount,
} from '#selectors';

import {
  uiDiscoverPageClosed,
} from '~actions/ui';
import {
  systemDiscoverAlbumsFetch,
} from '~actions/system';

import DiscoverPage from './DiscoverPage.jsx';

const mapStateToProps = (state) => {
  const isSelected = isDiscoverSelected(state);
  return {
    hasSelectedActions: isSelected,
    hasSearchBar: getAlbumsCount(state) > 0,
  };
};

const mapDispatchToProps = {
  onWillMount: systemDiscoverAlbumsFetch,
  onWillUnmount: uiDiscoverPageClosed,
};

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverPage);
