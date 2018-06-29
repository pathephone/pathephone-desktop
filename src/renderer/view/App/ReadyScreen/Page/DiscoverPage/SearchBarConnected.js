import { connect } from 'react-redux'

import {
  getDiscoverSearchValue
} from '#selectors'

import {
  uiDiscoverSearchPerformed,
  uiDiscoverSearchCleared,
  uiDiscoverSearchValueChanged
} from '~actions/ui'

import SearchBar from './SearchBar.jsx'

const mapStateToProps = state => ({
  searchValue: getDiscoverSearchValue(state)
})

const mapDispatchToProps = {
  onInputChange: uiDiscoverSearchValueChanged,
  onCancelSearch: uiDiscoverSearchCleared,
  onFormSubmit: uiDiscoverSearchPerformed
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
