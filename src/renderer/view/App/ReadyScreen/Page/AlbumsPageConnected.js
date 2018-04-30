import { connect } from 'react-redux'

import {
  getAlbumsSearchValue,
  getAlbumsFound,
  isAlbumsFound,
  isAlbumsSelected
} from '#selectors'

import {
  changeAlbumsPageSearchValue,
  clearAlbumsPageSearchValue,
  addAlbumToPlaylist,
  playAlbum,
  selectAlbumsPageAlbum
} from '#actions'

import AlbumsPage from './AlbumsPage.jsx'

const mapStateToProps = (...args) => ({
  albums: getAlbumsFound(...args),
  hasAlbumsFeed: isAlbumsFound(...args),
  hasSelectedBar: isAlbumsSelected(...args),
  hasNoSearchResultsMessage: !!getAlbumsSearchValue(...args) && !isAlbumsFound(...args),
  searchValue: getAlbumsSearchValue(...args)
})

const mapDispatchToProps = {
  onSearchValueChange: changeAlbumsPageSearchValue,
  onCancelSearch: clearAlbumsPageSearchValue,
  onSelectAlbum: selectAlbumsPageAlbum,
  onAddAlbumToPlaylist: addAlbumToPlaylist,
  onPlayAlbum: playAlbum
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumsPage)
