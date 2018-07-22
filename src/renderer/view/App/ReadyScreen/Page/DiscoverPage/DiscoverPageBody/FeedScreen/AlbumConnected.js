import { connect } from 'react-redux'

import {
  getDiscoverSelectedIds,
  getDiscoverFeedAlbums,
  getIpfsApiEndpoint
} from '#selectors'

import {
  uiDiscoverAlbumSelected,
  uiDiscoverAlbumDeselected,
  uiAlbumQueued,
  uiAlbumPlayed
} from '~actions/ui'

import Album from './Album.jsx'

const mapStateToProps = (state) => ({
  latestAlbums: getDiscoverFeedAlbums(state),
  selectedAlbums: getDiscoverSelectedIds(state),
  ipfsApiEndpoint: getIpfsApiEndpoint(state)
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
  const {
    latestAlbums,
    selectedAlbums,
    ipfsApiEndpoint
  } = stateProps

  const {
    uiDiscoverAlbumSelected,
    uiDiscoverAlbumDeselected,
    ...restDispatch
  } = dispatchProps

  const {
    albumId
  } = ownProps

  const {
    albumTitle,
    albumCid,
    albumArtist,
    albumCoverCid
  } = latestAlbums[albumId]

  const handleSome = id => id === albumId
  const hasSelectedView = selectedAlbums.some(handleSome)
  const onToggleSelect = hasSelectedView ? uiDiscoverAlbumDeselected : uiDiscoverAlbumSelected
  const albumCoverURL = `${ipfsApiEndpoint}/cat?arg=${albumCoverCid}`
  return ({
    ...restDispatch,
    albumCid,
    albumId,
    albumTitle,
    albumArtist,
    albumCoverURL,
    onToggleSelect,
    hasSelectedView
  })
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Album)
