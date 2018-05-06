import { connect } from 'react-redux'

import {
  getPlayedTrackId,
  getDownloadedTracks
} from '#selectors'

import { uiPlaylistTrackPlayed, uiPlaylistTrackRemoved } from '#actions-ui'

import PlaylistTrack from './PlaylistTrack.jsx'

const mapStateToProps = (state) => ({
  currentTrackId: getPlayedTrackId(state),
  downloadedTracks: getDownloadedTracks(state)
})

const mapDispatchToProps = {
  onPlay: uiPlaylistTrackPlayed,
  onRemove: uiPlaylistTrackRemoved
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { currentTrackId, downloadedTracks } = stateProps
  const { id, cid } = ownProps
  return {
    ...ownProps,
    ...dispatchProps,
    isCurrent: currentTrackId === id,
    isDownloaded: downloadedTracks.includes(cid)
  }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(PlaylistTrack)
