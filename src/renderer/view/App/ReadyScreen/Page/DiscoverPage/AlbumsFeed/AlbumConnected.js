import { connect } from 'react-redux'

import {
  getAlbumsSelected
} from '#selectors'

import Album from './Album.jsx'
import { uiAlbumSelected, uiAlbumAddedToPlaylist, uiAlbumPlayed } from '#actions-ui'

const mapStateToProps = (...args) => ({
  selectedAlbums: getAlbumsSelected(...args)
})

const mapDispatchToProps = {
  onSelectAlbum: uiAlbumSelected,
  onAddAlbumToPlaylist: uiAlbumAddedToPlaylist,
  onPlayAlbum: uiAlbumPlayed
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
