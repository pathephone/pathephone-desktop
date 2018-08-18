import { connect } from 'react-redux';

import {
  getDiscoverSearchValue,
  getAlbumsCount,
} from '#selectors';

import actions from '#actions';

import SearchBar from './SearchBar';

const mapStateToProps = state => ({
  searchValue: getDiscoverSearchValue(state),
  albumsCount: getAlbumsCount(state),
});

const mapDispatchToProps = {
  onInputChange: actions.uiDiscoverSearchValueChanged,
  onCancelSearch: actions.uiDiscoverSearchCleared,
  onFormSubmit: actions.uiDiscoverSearchPerformed,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
