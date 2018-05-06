import { connect } from 'react-redux'

import {
  getAlbumsSearchValue,
  getAlbumsFound,
  isAlbumsFound,
  isAlbumsSelected
} from '#selectors'

import AlbumsPage from './AlbumsPage.jsx'
import { uiAlbumsSearchPerformed, uiAlbumsSearchCleared } from '#actions-ui'

const mapStateToProps = (...args) => ({
  albums: getAlbumsFound(...args),
  hasAlbumsFeed: isAlbumsFound(...args),
  hasSelectedBar: isAlbumsSelected(...args),
  hasNoSearchResultsMessage: !!getAlbumsSearchValue(...args) && !isAlbumsFound(...args),
  searchValue: getAlbumsSearchValue(...args)
})

const mapDispatchToProps = {
  onSearchValueChange: uiAlbumsSearchPerformed,
  onCancelSearch: uiAlbumsSearchCleared
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumsPage)
