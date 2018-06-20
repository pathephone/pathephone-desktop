import { connect } from 'react-redux'

import {
  getDiscoverSelectedAlbums,
  getIpfsGateway
} from '#selectors'

import {
  uiDiscoverAlbumSelected,
  uiDiscoverAlbumDeselected,
  uiAlbumQueued,
  uiAlbumPlayed
} from '~actions/ui'

import Album from './Album.jsx'

const mapStateToProps = (state) => ({
  selectedAlbums: getDiscoverSelectedAlbums(state),
  ipfsGateway: getIpfsGateway(state)
})

const mapDispatchToProps = {
  uiDiscoverAlbumSelected,
  uiDiscoverAlbumDeselected,
  onAddAlbumToPlaylist: uiAlbumQueued,
  onPlayAlbum: uiAlbumPlayed
}

const mergeProps = (
  stateProps,
  dispatchProps,
  ownProps
) => {
  const { selectedAlbums, ipfsGateway } = stateProps
  const {
    uiDiscoverAlbumSelected,
    uiDiscoverAlbumDeselected,
    ...restDispatch
  } = dispatchProps
  const { albumCoverCid, ...restOwnProps } = ownProps

  const handleFind = cid => cid === ownProps.albumCid
  const hasSelectedView = selectedAlbums.some(handleFind)
  const onToggleSelect = hasSelectedView ? uiDiscoverAlbumDeselected : uiDiscoverAlbumSelected
  const albumCoverURL = `${ipfsGateway}/ipfs/${albumCoverCid}`
  return ({
    ...restOwnProps,
    ...restDispatch,
    albumCoverURL,
    onToggleSelect,
    hasSelectedView
  })
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Album)
