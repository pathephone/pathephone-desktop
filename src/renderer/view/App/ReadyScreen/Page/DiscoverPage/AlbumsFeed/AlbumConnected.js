import { connect } from 'react-redux'

import {
  getDiscoverSelectedAlbums
} from '#selectors'

import Album from './Album.jsx'
import { uiDiscoverAlbumSelected, uiDiscoverAlbumDeselected, uiAlbumQueued, uiAlbumPlayed } from '#actions-ui'

const mapStateToProps = (...args) => ({
  selectedAlbums: getDiscoverSelectedAlbums(...args)
})

const mapDispatchToProps = {
  uiDiscoverAlbumSelected,
  uiDiscoverAlbumDeselected,
  onAddAlbumToPlaylist: uiAlbumQueued,
  onPlayAlbum: uiAlbumPlayed
}

const mergeProps = ({ selectedAlbums }, { uiDiscoverAlbumSelected, uiDiscoverAlbumDeselected, ...restDispatch }, ownProps) => {
  const handleFind = cid => cid === ownProps.albumCid
  const hasSelectedView = selectedAlbums.some(handleFind)
  const onToggleSelect = hasSelectedView ? uiDiscoverAlbumDeselected : uiDiscoverAlbumSelected
  return ({
    ...ownProps,
    ...restDispatch,
    onToggleSelect,
    hasSelectedView
  })
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Album)
