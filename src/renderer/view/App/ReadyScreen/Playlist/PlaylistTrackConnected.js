import { connect } from 'react-redux'

import {
  getPlayedTrackId,
  getDownloadedTracks
} from '#selectors'

import {
  playPlaylistTrack,
  removeTrackFromPlaylist
} from '#actions'

import PlaylistTrack from './PlaylistTrack.jsx'

const mapStateToProps = (state) => ({
  currentTrackId: getPlayedTrackId(state),
  downloadedTracks: getDownloadedTracks(state)
})

const mapDispatchToProps = {
  onPlay: playPlaylistTrack,
  onRemove: removeTrackFromPlaylist
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
