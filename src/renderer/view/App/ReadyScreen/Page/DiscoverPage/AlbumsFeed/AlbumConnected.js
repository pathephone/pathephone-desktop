import { connect } from 'react-redux'

import {
  getFeedSelectedAlbums
} from '#selectors'

import Album from './Album.jsx'
import { uiAlbumSelected, uiAlbumDeselected, uiAlbumAddedToPlaylist, uiAlbumPlayed } from '#actions-ui'

const mapStateToProps = (...args) => ({
  selectedAlbums: getFeedSelectedAlbums(...args)
})

const mapDispatchToProps = {
  uiAlbumSelected,
  uiAlbumDeselected,
  onAddAlbumToPlaylist: uiAlbumAddedToPlaylist,
  onPlayAlbum: uiAlbumPlayed
}

const mergeProps = ({ selectedAlbums }, { uiAlbumSelected, uiAlbumDeselected, ...restDispatch }, ownProps) => {
  const handleFind = cid => cid === ownProps.albumCid
  const hasSelectedView = selectedAlbums.some(handleFind)
  const onToggleSelect = hasSelectedView ? uiAlbumDeselected : uiAlbumSelected
  return ({
    ...ownProps,
    ...restDispatch,
    onToggleSelect,
    hasSelectedView
  })
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Album)
