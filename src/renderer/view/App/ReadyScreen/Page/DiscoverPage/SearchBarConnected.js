import { connect } from 'react-redux'

import {
  getDiscoverSearchValue
} from '#selectors'

import {
  uiDiscoverSearchPerformed,
  uiDiscoverSearchCleared
} from '~actions/ui'

import SearchBar from './SearchBar.jsx'

const mapStateToProps = state => ({
  searchValue: getDiscoverSearchValue(state)
})

const mapDispatchToProps = {
  onSearchValueChange: uiDiscoverSearchPerformed,
  onCancelSearch: uiDiscoverSearchCleared
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
