import { connect } from 'react-redux';

import selectors from '#selectors';
import actions from '#actions';

import SearchBar from './SearchBar';

const mapStateToProps = state => ({
  searchValue: selectors.getDiscoverSearchValue(state),
  albumsCount: selectors.getAlbumsCount(state),
});

const mapDispatchToProps = {
  onInputChange: actions.uiDiscoverSearchValueChanged,
  onCancelSearch: actions.uiDiscoverSearchCleared,
  onFormSubmit: actions.uiDiscoverSearchPerformed,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
