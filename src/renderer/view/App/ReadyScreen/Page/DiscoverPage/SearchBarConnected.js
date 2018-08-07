import { connect } from 'react-redux';

import {
  getDiscoverSearchValue,
  getAlbumsCount,
} from '#selectors';

import {
  uiDiscoverSearchPerformed,
  uiDiscoverSearchCleared,
  uiDiscoverSearchValueChanged,
} from '~actions/ui';

import SearchBar from './SearchBar.jsx';

const mapStateToProps = state => ({
  searchValue: getDiscoverSearchValue(state),
  albumsCount: getAlbumsCount(state),
});

const mapDispatchToProps = {
  onInputChange: uiDiscoverSearchValueChanged,
  onCancelSearch: uiDiscoverSearchCleared,
  onFormSubmit: uiDiscoverSearchPerformed,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
