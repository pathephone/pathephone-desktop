import { connect } from 'react-redux'

import {
  getAlbumsPageAlbums,
  getAlbumsPageSearchValue
} from '~/selectors'

import {
  changeAlbumsPageSearchValue,
  clearAlbumsPageSearchValue,
  addAlbumToPlaylist,
  playAlbum,
  selectAlbumsPageAlbum
} from '~/actions'

import AlbumsPage from './AlbumsPage'

const mapStateToProps = (...args) => ({
  albums: getAlbumsPageAlbums(...args),
  searchValue: getAlbumsPageSearchValue(...args)
})

const mapDispatchToProps = {
  onSearchValueChange: changeAlbumsPageSearchValue,
  onCancelSearch: clearAlbumsPageSearchValue,
  onSelectAlbum: selectAlbumsPageAlbum,
  onAddAlbumToPlaylist: addAlbumToPlaylist,
  onPlayAlbum: playAlbum
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumsPage)
