import { connect } from 'react-redux'

import {
  getCurrentTrackIndex,
  getPlaylistTracksByIndex,
  getPlaylistCachedByCid
} from '#selectors'

import { uiPlaylistTrackPlayed, uiPlaylistTrackRemoved } from '#actions-ui'

import PlaylistTrack from './PlaylistTrack.jsx'

const mapStateToProps = (state) => ({
  currentTrackIndex: getCurrentTrackIndex(state),
  tracksByIndex: getPlaylistTracksByIndex(state),
  cachedByCid: getPlaylistCachedByCid(state)
})

const mapDispatchToProps = {
  onPlayTrack: uiPlaylistTrackPlayed,
  onRemoveTrack: uiPlaylistTrackRemoved
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { cachedByCid, tracksByIndex, currentTrackIndex } = stateProps
  const { index } = ownProps
  const { cid, ...trackData } = tracksByIndex[index]
  return {
    ...trackData,
    isCurrent: index === currentTrackIndex,
    isDownloaded: !!cachedByCid[cid],
    order: index,
    onPlayClick () {
      dispatchProps.onPlayTrack(index)
    },
    onRemoveClick () {
      dispatchProps.onRemoveTrack(index)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(PlaylistTrack)
