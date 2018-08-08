import { connect } from 'react-redux';

import {
  getCurrentTrackIndex,
  getPlaylistTracksByIndex,
  getCachedCIDs,
} from '#selectors';

import { uiPlaylistTrackPlayed, uiPlaylistTrackRemoved } from '~actions/ui';

import PlaylistTrack from './PlaylistTrack';

const mapStateToProps = state => ({
  currentTrackIndex: getCurrentTrackIndex(state),
  tracksByIndex: getPlaylistTracksByIndex(state),
  cachedCIDs: getCachedCIDs(state),
});

const mapDispatchToProps = {
  onPlayTrack: uiPlaylistTrackPlayed,
  onRemoveTrack: uiPlaylistTrackRemoved,
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { cachedCIDs, tracksByIndex, currentTrackIndex } = stateProps;
  const { index } = ownProps;
  const { audio, ...trackData } = tracksByIndex[index];
  return {
    ...trackData,
    isCurrent: index === currentTrackIndex,
    isDownloaded: !!cachedCIDs[audio],
    order: index,
    onPlayClick() {
      dispatchProps.onPlayTrack(index);
    },
    onRemoveClick() {
      dispatchProps.onRemoveTrack(index);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(PlaylistTrack);
