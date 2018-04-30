import { connect } from 'react-redux'

import {
  getAlbumsSelected
} from '#selectors'

import {
  addAlbumToPlaylist,
  playAlbum,
  selectAlbumsPageAlbum
} from '#actions'

import Album from './Album.jsx'

const mapStateToProps = (...args) => ({
  selectedAlbums: getAlbumsSelected(...args)
})

const mapDispatchToProps = {
  onSelectAlbum: selectAlbumsPageAlbum,
  onAddAlbumToPlaylist: addAlbumToPlaylist,
  onPlayAlbum: playAlbum
}

const mergeProps = ({ selectedAlbums }, dispatchProps, ownProps) => {
  const handleFind = cid => cid === ownProps.cid
  const isSelected = selectedAlbums.find(handleFind)
  return ({
    ...ownProps,
    ...dispatchProps,
    isSelected
  })
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Album)
